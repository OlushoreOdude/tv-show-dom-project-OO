const url = "https://www.randomuser.me/api";

//fetch to a url,
//then do res.json()
//then we have the data to play with

async function getTheData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("from the async funciton");
    console.log(data.results[0].name.first);
  } catch (err) {
    console.error(err);
  }
}

export default getTheData;
// note the above works with export default, have commented out.
