console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

//this is an async function because it returns a promise so put async after click and wait before fetch
submitButton.addEventListener("click", async (e) => {
  //API Key
  let myKey = "HXAL9lZ2dwVKAYrTY3qwdfpRQC42jkej";
  let topic = queryField.value;
  console.log(topic);
  //make a url variable (with https://) with the search endpoint to this api
  //start contructing your api with api, use ? then name of parameter and then value of that parameter (use format string method because this uses the above variables)
  //the parameters are the api key and q which is used to search the query by a term or phase which will be searching by the topic variable (what the user inputs)
  //seperate paramters by &

  //MEDIUM CHALLENGE
  //Think about how you could modify the query so that all the gifs your users get fit a theme. You may or may not have noticed, but the model modified the queries to make the responses all be a little bit cat-related.
  //add + and theme name at the end of the url (dog theme)
  let url=`https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}+dog`;
  console.log(url);
  //fetch this api (async function)
  let response = await fetch(url);
  console.log(response);
  //use json to get the data from the url (in variable response) use away because async
  let data = await response.json();
  console.log(data);
  //get the specific gif/image by accessing the object data with an array called data, then property called images
  //want to get a random image based on the user input 
  let max = getRandomInt(data.data.length)
  let imageUrl = data.data[max].images.downsized.url;
  console.log(imageUrl);

  imageHolderDiv.innerHTML = `<img src="${imageUrl}"/>`;
});


