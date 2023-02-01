//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} dd episode(s)`;

  // creat element
  // add element condtent
  // append element to parent

  let par = document.createElement("p");
  let img = document.createElement("img");
}

window.onload = setup;
