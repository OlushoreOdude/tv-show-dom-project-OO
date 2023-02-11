const url = "https://api.tvmaze.com/shows/82/episodes";

//fetch to a url,
//then do res.json()
//then we have the data to play with

async function getTheDataTest() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("from the async funciton");
    //console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

export default getTheDataTest;
// note the above works with export default, have commented out.
