/*
function makeSectionForEpisodes(episodesArr) {
  const rootElem = document.getElementById("root");

  // clear out the rootElement's html before we add the new stuff
  rootElem.innerHTML = "";

  // -- expect to return an array of section elem --//
  //\\ --receveed array of secitons
  //\\ -- close test
  let section2 = episodesArr.map((episode) => {
    let epId = episodeCode(episode);
    let section = createElement("section", newObj2(sectionElemArr), "test", epId);

    // -- expect to return an array of ep cards --//
    episodeCards = episodesArr.map((episode) => {
      let cardFlipConatainer = createElement("div", divElemArr, epId);

      cardFlipConatainer.classList = [...cardFlipConatainer.classList, "flip-container"];
    });
    // can set inner text manually ike below
    // not sure why its not working in fuct
    //section.innerText ="test";
    return section;
  });

  // -- append ep cards to root
  rootElem.append(...section2);
  console.log(rootElem);
}

*/
