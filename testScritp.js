// import testData from "./urlData.js";
//testData;
// onece imported test data seem to work without being called.
// this seems to be the same for tvMazeData
//  console.log(testData);

//import getTheData from "./urlData2.js";
//getTheData();

//import tvMazeData from "./tvShowApiData.js";
//onsole.log(tvMazeData, "tv maze");
//
import getTheDataTest from "./asyncTvShowApi.js";
//note/ can improt user data from api
// if using async will need to invoke the function, seeme to work as fast
//
//-- crate element fnciton takes in a type, object of attributes, eventhanler, innerText and rid --//
// if you provide it with a new Id it will replace the one set in the element creataion, other wise it will be a random id,
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

//let allEps = await getTheDataTest();
//console.log(allEps, "alleps");
//
//function getAllEpisodes() {
// return [];
//}

//--test funciton area start --//
//let section = createElement("section", newObj2(sectionElemArr), "test", "st446");

//console.log(section);

//-- test function area end --///

async function setup() {
  //let allEps = await getTheDataTest();
  //const allEpisodes = allEps;
  // the above works
  //
  const allEpisodes = await getTheDataTest();
  //console.log(allEpisodes, "allepisode");
  //const allEpisodes = [];
  //const allEpisodes = getAllEpisodes();
  //const allEpisodes = tvMazeData;
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
  //\\ --receveed array of secitons
  //\\ -- close test delete and moved to workingTest.

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

    //-- and the creation of the extion element here?
    //can seperate later
    //Note: document.getElementById or queryselector
    //seem to link the variable to the element anywhere
    // in the dom, using apend will apend the newley created element
    // to the specified parent, regardles of the distance between
    // the baby/child and the parent,
    //e.g, the child can be created and link to the parent in a
    //funciton body that does not incude the parent.
    const optionElem = document.createElement("option");
    optionElem.textContent = `${episodeCode(episode)} ${epName}`;
    //NOTE: vaule attribute --The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.
    // inshort value is = textContent if empty else its equal to the set value, which does not replace the text content visibly ( on the user side) but if used as part of the form is the value that is submitted
    optionElem.value = id;
    selectElem.append(optionElem);

    return cardFlipConatainer;
  });

  section.append(...episodeCards);
  // can set inner text manually ike below
  // not sure why its not working in fuct
  //section.innerText ="test";

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
    //console.log(ep);
    return ep.id === chosenEpId;
    //console.log(ep.id === chosenEpId);
    console.log(typeof ep.id, "epid type");
    // chosen
    //console.log(chosenEpId, "chosen epid");
  });
  console.log({ selectedEpisode }, "selected episod");
  if (selectedEpisode) {
    // makeSection takes an array ,
    // .find() return an indexed item form the arry
    // the index item in the getAllEpisodes Array is an object
    // need to package the object inside an arry
    makeSectionForEpisodes([selectedEpisode]);
  }
  //console.log(event.target.value);
  // const searchString = event.target.value;
  // const filteredEpisodes = getAllEpisodes().filter((episode) => {
  //   return (
  //     episode.summary.toLowerCase().includes(searchString) ||
  //     episode.name.toLowerCase().includes(searchString)
  //   );
  // });
  //-- funcrion takes an array frin filter and populates a section --//
  // makeSectionForEpisodes(filteredEpisodes);
});

window.onload = setup;
