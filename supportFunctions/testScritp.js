//-- crate element fnciton takes in a type, object of attributes, eventhanler, innerText and rid --//
// if you provide it with a new Id it will replace the one set in the element creataion, other wise it will be a random id,
import { createElement } from "./creatElement.js";
import { getAllEpisodes, getOneEpisode } from "./CopyEpisodes.js";
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

//--test funciton area start --//
//let section = createElement("section", newObj2(sectionElemArr), "test", "st446");

//console.log(section);

//-- test function area end --///

function setup() {
  const allEpisodes = getAllEpisodes();
  makeSectionForEpisodes(allEpisodes);
}

//-- function takes epidodes Arr-object and attaches episodes of cards to DOM -- function returns undefined --//

function makeSectionForEpisodes(episodesArr) {
  const rootElem = document.getElementById("root");

  // clear out the rootElement's html before we add the new stuff
  rootElem.innerHTML = "";

  // -- expect to return an array of section elem --//
  //\\ --receveed array of secitons
  //\\ -- close test delete and moved to workingTest.

  let section = createElement("section", newObj2(sectionElemArr), "test");
  // -- expect to return an array of ep cards --//
  let episodeCards = episodesArr.map((episode) => {
    let epId = episodeCode(episode);
    //-- attribute argument must be an  object --//
    let cardFlipConatainer = createElement("div", newObj2(divElemArr), epId);
    console.log(cardFlipConatainer.classList);
    cardFlipConatainer.classList = [...cardFlipConatainer.classList, "flip-container"];

    return cardFlipConatainer;
  });

  section.append(...episodeCards);
  // can set inner text manually ike below
  // not sure why its not working in fuct
  //section.innerText ="test";

  // -- append ep cards to sectin
  rootElem.append(section);
  console.log(rootElem);
}

//-- function takes epidode object and retruns stirng --//
const episodeCode = ({ season, number }) => {
  let seasonNum = season < 10 ? `0${season}` : season;
  let epNum = number < 10 ? `0${number}` : number;
  return `S${seasonNum}E${epNum}`;
};

//-- function takes epidode object and destructures --//
////--- could call, function getEpisodesValue
function getEpisodeValues({
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
  links,
}) {}

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

window.onload = setup;
