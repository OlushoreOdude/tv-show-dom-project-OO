import getTheDataTest from "./asyncTvShowApi.js";

import { createElement } from "./creatElement.js";
import { getAllEpisodes, getOneEpisode } from "./copyEpisodes.js";
import { getOneShow, getAllShows } from "./copyShows.js";

//-- functions for creating an object -- //
import { newObj2, randomId } from "./creatElAttribute.js";

//--element templates as Arrays for use with obj funct --//
import {
  spanElemArr,
  liElemArr,
  buttonElemArr,
  imgElemArr,
  parElemArr,
  sectionElemArr,
  divElemArr,
  h1ElemArr,
} from "./creatElAttribute.js";

async function setup() {
  const allEpisodes = await getTheDataTest();

  makeSectionForEpisodes(allEpisodes);
}

//-- function takes epidodes Arr-object and attaches episodes of cards to DOM -- function returns undefined --//

function makeSectionForEpisodes(episodesArr) {
  const rootElem = document.getElementById("root");

  const selectElem = document.getElementById("select-input");
  console.log(selectElem);

  // clear out the rootElement's html before we add the new stuff
  rootElem.innerHTML = "";
  //create paragrthe with total number of episodes shown
  const countEpsShown = document.createElement("p");
  countEpsShown.innerText = `showing ${episodesArr.length} eppisodes`;
  rootElem.appendChild(countEpsShown);
  // -- expect to return an array of section elem --//

  let section = createElement("section", newObj2(sectionElemArr));
  section.classList.add("contain-all-fliped");
  // -- expect to return an array of ep cards --//
  let episodeCards = episodesArr.map((episode) => {
    let {
      id,
      url,
      name: epName,
      season: seasonNumb,
      number: epNumb,
      airdate,
      airtime,
      airstamp,
      runtime,
      image: { medium: mediumImg, original: largeImg },
      summary,
      _links: {
        self: { href: siteLink },
      },
    } = episode;

    let epId = episodeCode(episode);
    //-- attribute argument must be an  object --//
    let flipFuction = function () {
      // console.log(this, 1);
      this.classList.toggle("hover");
    };
    let cardFlipConatainer = createElement("div", newObj2(divElemArr), epId, flipFuction);
    // console.log(cardFlipConatainer.classList);
    cardFlipConatainer.classList.add("flip-container");

    // --creat and set flipperdiv
    let flipperDiv = createElement("div", newObj2(divElemArr), randomId());
    flipperDiv.classList.add("flipper");

    //-- creat fontDiv
    let frontDiv = createElement("div", newObj2(divElemArr), randomId());
    frontDiv.classList.add("front");

    // -- creat frontDive head, body and button
    let frontDivHead = createElement("div", newObj2(divElemArr), randomId(), "cardTitle");

    frontDivHead.innerText = `${epId} ${epName}`;
    let forntDivBody = createElement("div", newObj2(divElemArr), randomId());
    // --create image
    let fdbImage = createElement("img", {
      id: randomId(),
      class: ["img-Class"],
      src: mediumImg,
      alt: epName,
    });

    forntDivBody.appendChild(fdbImage);
    let frontDivText = createElement("div", newObj2(divElemArr), "card Text", randomId());
    frontDivText.classList.add("summary");
    frontDivText.innerHTML = `${summary}`;
    let frontDivLink = createElement("p", {
      id: randomId(),
      innerText: `click here for more info`,
    });

    //-- append fronDiv internal section to fronDiv
    frontDiv.append(frontDivHead, forntDivBody, frontDivText, frontDivLink);

    //-- creat backDiv
    let backDiv = createElement("div", newObj2(divElemArr), randomId(), "back");
    backDiv.classList.add("back");
    backDiv.innerText = `
      episode ${id},  
      name: ${epName},
      Season: ${seasonNumb},
      Episode: ${epNumb},
      airdate: ${airdate},
      airtime: ${airtime},
      runtime:${runtime},
`;
    let backDivLink = createElement("a", {
      href: url,
      id: randomId(),
      innerText: `more info at tvMaze`,
    });
    backDiv.append(backDivLink);
    //-- append front and back div to flipperDiv
    flipperDiv.append(frontDiv, backDiv);

    //-- append flipper div to cardFlipCon..
    cardFlipConatainer.append(flipperDiv);

    const optionElem = document.createElement("option");
    optionElem.textContent = `${episodeCode(episode)} ${epName}`;

    optionElem.value = id;
    selectElem.append(optionElem);

    return cardFlipConatainer;
  });

  section.append(...episodeCards);

  // -- append ep cards to sectin
  rootElem.append(section);
  // console.log(rootElem);

  //also add it to the select element as an option
}

//-- function takes epidode object and retruns stirng --//
const episodeCode = ({ season, number }) => {
  let seasonNum = season < 10 ? `0${season}` : season;
  let epNum = number < 10 ? `0${number}` : number;
  return `S${seasonNum}E${epNum}`;
};

// -- get input element value, search epSummary by value, repopulate section with filtered value --//
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
  console.log(event.target.value);
  const searchString = event.target.value;
  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    return (
      episode.summary.toLowerCase().includes(searchString) ||
      episode.name.toLowerCase().includes(searchString)
    );
  });
  //-- funcrion takes an array frin filter and populates a section --//
  makeSectionForEpisodes(filteredEpisodes);
});

const selectInput = document.getElementById("select-input");
selectInput.addEventListener("change", (event) => {
  console.log(event.target.value, "target value");
  // even.target.value is type of string
  // need to convert to a number to use deep equality oprator
  let chosenEpId = +event.target.value;
  console.log(typeof chosenEpId, chosenEpId, "chosenEpid type");
  const selectedEpisode = getAllEpisodes().find((ep) => {
    return ep.id === chosenEpId;
  });

  if (selectedEpisode) {
    // makeSection takes an array ,
    // .find() return an indexed item form the arry
    // the index item in the getAllEpisodes Array is an object
    // need to package the object inside an arry
    makeSectionForEpisodes([selectedEpisode]);
  }
});

window.onload = setup;
