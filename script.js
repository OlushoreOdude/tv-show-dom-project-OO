//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// -- function takes in an object and destructures the values --//
/*
- converts the variables to strings
- uses padStart to padd the dtart of hte variable with a zero( which is requied strig/item)
- uses entropilation to creat a string that includes the required variable and its padding
- return the newly created string
*/
function makeSeasonAndEpisode(episode) {
  const { season, number } = episode;
  const paddedSeason = season.toString().padStart(2, "0");
  const paddedEpisode = number.toString().padStart(2, "0");

  return `S${paddedSeason}E${paddedEpisode}`;
}

/*
this function takes in an object of episodes
*/
function makePageForEpisodes(episodeList) {
  //episodeList is an object

  const rootElem = document.getElementById("root");
  // clear out the rootElement's html before we add the new stuff
  rootElem.innerHTML = "";

  //create paragrthe with total number of episodes shown
  const countParagraph = document.createElement("p");
  countParagraph.innerText = `showing ${episodeList.length} eppisodes`;
  rootElem.appendChild(countParagraph);

  episodeList.forEach((episode) => {
    // add the season and episode and name
    const paragrath = document.createElement("p");
    paragrath.textContent = `${makeSeasonAndEpisode(episode)}:${episode.name}`;
    rootElem.appendChild(paragrath);

    // add the image
    const image = document.createElement("img");
    image.src = episode.image.medium;
    rootElem.appendChild(image);

    //add the ...
    const summaryParagraph = document.createElement("p");
    summaryParagraph.innerHTML = episode.summary;
    rootElem.appendChild(summaryParagraph);
    rootElem.innerHTML += episode.summary;
  });

  // input ok, key up is ok to get value as event listener

  // -- original text --//
  // rootElem.textContent = `Got ${episodeList.length} dd episode(s)`;

  // // creat element
  // // add element condtent
  // // append element to parent

  // let par = document.createElement("p");
  // let img = document.createElement("img");
}
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
  console.log(event.target.value);
  const searchString = event.target.value;
  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    if (episode.summary.includes(searchString)) {
      return true;
    }
    if (episode.name.includes(searchString)) {
      return true;
    }
    return false;

    /*
    return (
        episode.summary.toLowerCase().includes(searchString) || episode.name.toLowerCase().includes(searchString)
    );
    
    */
  });

  makePageForEpisodes(filteredEpisodes);
});
window.onload = setup;

//note: to append before use prepend
