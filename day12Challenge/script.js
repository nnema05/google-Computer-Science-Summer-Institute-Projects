console.log("Script running");

const userApiKey = "f6e2aaae7028b8e3573e5848e6b49283"


// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const titleHolderDiv = document.querySelector("#titleHolder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(titleHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = userApiKey;
  let topic = queryField.value;
  let url = `https://api.themoviedb.org/3/movie/550?api_key=${myKey}&q=${topic}`;
  console.log(url);

  //fetch this api (async function)
  let response = await fetch(url);
  console.log(response);

  //use json to get the data from the url (in variable response) use away because async
  let data = await response.json();
  console.log(data);
  let movie = getRandomInt(Object.keys(data).length);
  console.log(max)
  let title = data[max].title;
  console.log(title);

  //   titleHolderDiv.innerHTML = `<h1>${title}</h1>`;
});

//   // fetch(...).then(() => {...}).catch(() => {...});
//   try {
//     const response = await fetch(myQuery);
//     const responseJson = await response.json(); // read JSON response

//     // code to execute once JSON response is available
//     let i = getRandomInt(10);
//     let imgurl = responseJson.data[i].images.downsized.url;
//     console.log(imgurl);
//     imageHolderDiv.innerHTML =
//       `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML;
//   } catch (error) {
//     console.error(error);
//   }
// })
