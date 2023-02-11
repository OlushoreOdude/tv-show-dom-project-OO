const urlTvmaze = "https://api.tvmaze.com/shows/82/episodes";

//fetch to a url,
//then do res.json()
//then we have the data to play with

let tvMazeData = fetch(urlTvmaze)
  .then((res) => res.json())
  .then((data) => {
    console.log("from the promis chain");
    console.log(data);
    //console.log(data.results[0].name.first);
    if (!data) {
      throw new Error("something went wrong");
    }
  })
  .catch((err) => console.error(err));

export default tvMazeData;
// note the above works with export default, have commented out.

/// diconected , need to figure out async i thnk
