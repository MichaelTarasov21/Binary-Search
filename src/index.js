const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("data").innerHTML = `Your dataset is ${data}`;

function search() {
  const searchterm = document.getElementById("input").value;
  if (isNaN(searchterm)) {
    alert("I only know how to search for numbers");
    return;
  }
  let i;
  let tosearch = data;
  for (i = 0; tosearch.length >= 1; i++) {
    const halfway = Math.floor(tosearch.length / 2); // Used to get an interger value that is rougphly the middle term in the se tlef to search
    const dataterm = tosearch[halfway];
    if (searchterm == dataterm) {
      document.getElementById(
        "results"
      ).innerHTML = `${searchterm} is a term in the dataset. I learned this after ${
        i + 1
      } searches.`;
      return;
    } else if (searchterm > dataterm) {
      tosearch = tosearch.slice(halfway + 1, tosearch.length + 1);
      console.log(tosearch)
    } else {
      tosearch = tosearch.slice(0, halfway);
      console.log(tosearch)
    }
  }
  document.getElementById(
    "results"
  ).innerHTML = `${searchterm} is not a term in the dataset.`;
}
document.getElementById("submit").addEventListener("click", search);
