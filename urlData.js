const url = "https://www.randomuser.me/api";

//fetch to a url,
//then do res.json()
//then we have the data to play with

let testData = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log("from the promis chain");
    console.log(data.results[0].name.first);
    if (!data) {
      throw new Error("something went wrong");
    }
  })
  .catch((err) => console.error(err));

export default testData;
// note the above works with export default, have commented out.
