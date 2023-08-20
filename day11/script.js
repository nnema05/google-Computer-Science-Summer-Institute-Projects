// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInteger = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select the spans & divs where we'll display outputs.
const scoreSpan = document.querySelector("#score");
const pointsSpan = document.querySelector("#points");
const questionDiv = document.querySelector("#question");

// Select the buttons and input fields where users can provide inputs.
const randomButton = document.querySelector("#random");
const hardButton = document.querySelector("#hard");
const categoryButton = document.querySelector("#categoryPuns");
const answerInputBox = document.querySelector("#userAnswer");
const submitButton = document.querySelector("#submit");

// Starting variables - we'll eventually replace these with API responses.
let currentScore = 0;
let currentPoints = 300;
let currentQuestion =
  "The Japanese name for this grass-type pokemon, Fushigidane, is a pun on the phrase 'strange seed.'";
let currentAnswer = "bulbasaur";

//MILD CHALLENGE: 
//Right now the user can answer the question as many times as they want, scoring theoretically infinite points as long as they know the answer to the current question - that feels strange, and it’s definitely not how the game is played on the show. Create a fifth variable called currentQuestionLive that starts off as true and changes to false when the user makes a guess. Make sure it switches back to true whenever a new question is loaded. Write some additional code in your checkAnswer function to make sure that the points are only updated if the current question is live.
let currentQuestionLive = true;

//Declare function
// This function updates the text on the board to display:
// 1) The player's current score
// 2) The points for the current question
// 3) The text of the current question
const updateBoard = () => {
  scoreSpan.innerHTML = currentScore;
  pointsSpan.innerHTML = currentPoints;
  // TODO: Update the question too.
  questionDiv.innerHTML = currentQuestion;
};

// TODO: Call the updateBoard() function to fill the board.
updateBoard();

// TODO: Finish this function to checks the user's answer.
//MILD CHALLENGE: 
//Upgrade your checkAnswer function.
//Find a way to make your comparison case-insensitive.
//Find a way to make strip both the user’s answer and the provided answer of all punctuation, and filler words like “a” “an” and “the”.
//Find a way to let the user know if they’re close, but not quite there.
const checkAnswer = () => {
  console.log('checking answer');
  //get the players answer
  //lowercase both current and player answer
  let playerAnswer = answerInputBox.value.toLowerCase()
  currentAnswer = currentAnswer.toLowerCase();
  //replace any punction
  playerAnswer = playerAnswer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]?/g, "");
  //replace the words a an and the
  //use split and join so the spaces added are ignored
  //get rid of first characters plus the space (this is so a "an" doesn't get removed in the middle of a word) 
  //use trim so extrac spaces are ignored
  if (playerAnswer.startsWith("an")) {
    playerAnswer = playerAnswer.substr(3, playerAnswer.length).trim();
  } else if (playerAnswer.startsWith("a")) {
    playerAnswer = playerAnswer.substr(2, playerAnswer.length).trim();
  } else if (playerAnswer.startsWith("the")) {
    playerAnswer = playerAnswer.substr(4, playerAnswer.length).trim();
  };

  // playerAnswer = playerAnswer.replace(new RegExp('\\b(' + uselessWordsString + ')\\b', 'gi'), "");
  console.log("You guessed:", playerAnswer);
  console.log("Correct answer:", currentAnswer);

  //MEDIUM CHALLENGE
  //Find a way to let the user know if they’re close, but not quite there.
  // //if the first letter of their guess = first letter of current answer
  // if (playerAnswer.charAt(0) === currentAnswer.charAt(0)) {
  //   alert("Your answer is close but not quite there yet. You got the first letter right!")
  // }



  // TODO: Compare the player's answer with the correct answer.
  //       If it's correct, update the player's score according to the 
  //       value of the question. An incorrect answer results in the player
  //       losing the number of points for the question.
  //MEDIUM CHALLENGE
  //Find a way to let the user know if they’re close, but not quite there.
  //if the first letter of their guess = first letter of current answer
  //MILD: only add points if current question live is true
  console.log(currentQuestionLive)
  if (currentQuestionLive === true) {
    if (playerAnswer === currentAnswer) {
      currentScore += currentPoints;
    } else if (playerAnswer.charAt(0) === currentAnswer.charAt(0)) {
      alert("Your answer is close but not quite there yet. You got the first letter right!")
      currentScore -= currentPoints;
    } else {
      currentScore -= currentPoints;
    }
  }

  //MILD
  //current question live becomes false when an answer is guessed and submit button is pressed
  console.log(currentQuestionLive)
  currentQuestionLive = false;
  console.log(currentQuestionLive)

  // TODO: Update the board to show the updated score.
  updateBoard();


};
// TODO: Attach checkAnswer() to the submit button via an event listener.
submitButton.addEventListener('click', checkAnswer);


// TODO: Create a getRandomQuestion() function to obtain a random question
//       from the Trivia Service API.
const getRandomQuestion = async () => {
  input.classList.remove("hidden");
  question.classList.remove("hidden");
  console.log('getting a random question');
  //fetch is js function that gets an api for us
  //await makes sures that the response get converted from a promise to a js object
  //when using await in a function we have to declare a function as an asynchronous function so include async in front of the paranthesis
  const response = await fetch('https://jeopardy.wang-lu.com/api/random');
  //to get that data create a data variable and take the json out of our response variable, data ends up being an array
  const data = await response.json();
  //get first index of data which is an object
  const randomQuestionObject = data[0]
  //then get the property question and assign the following to current question, current pooints, current answer so the update board can use it to update the board
  currentQuestion = randomQuestionObject.question;
  //get value and answer
  currentPoints = randomQuestionObject.value;
  currentAnswer = randomQuestionObject.answer;

  //call updateBoard
  updateBoard();
}

// TODO: Attach getRandomQuestion() to a click event listener for the Random button.
randomButton.addEventListener('click', getRandomQuestion);

// TODO: Create a gethardQuestion() function to obtain a question
//       from the Trivia Service API whose value is 1000.
//       Note that the clues endpoint always returns the same response.
//       So in order to get a new question, you'll need to use any random
//       index other than 0. 
//       Hint: Look at the JS code already written for you to help with this.
const getHardQuestion = async () => {
  input.classList.remove("hidden");
  question.classList.remove("hidden");
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value=1000");
  const data = await response.json();
  const i = getRandomInteger(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  updateBoard();
};


// TODO: Attach the getHardQuestion() function to a click event listener for the Hard button.
hardButton.addEventListener("click", getHardQuestion);

// TODO: Create a getCatQuestion() function to obtain a question
//       from the Trivia Service API whose category ID is 6.
//       Note that the clues endpoint always returns the same response.
//       So in order to get a new question, you'll need to use any random
//       index other than 0. 
//       Hint: Look at the JS code already written for you to help with this.
//MEDIUM CHALENGE
//The cat button is maybe a little too niche - add an input field where the user can enter the number of a category they would like to explore, and modify the cat button (or make a new one) that selects a question from the category the user selected. Hint: You may need to provide some category numbers as options so that the user knows what some valid options are.
const getQuestion = async () => {
  input.classList.remove("hidden");
  question.classList.remove("hidden");
  const id = parseInt(prompt('Enter a category ID. Please enter an id between 1-1000'));
  //checks for invalid ids
  if (isNaN(id) || id <= 0 || id > 1000) {
    alert('Your id is invalid.');
    //return from function, exiting the code
    return;
  };
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?category=" + id);
  const data = await response.json();
  const i = getRandomInteger(data.length);
  console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  updateBoard();
};

// TODO: Attach the getCatQuestion() function to a click event listener for the Cat button.
categoryButton.addEventListener("click", getQuestion);

//MEDIUM CHALLENGE
//Instead of displaying the front and back of the card at the same time, have the card show just the point value until it is clicked. Then show just the back until the card is answered, and switch to an empty blue square after that.
//add hidden in the card
//select both cards and input
let pointsCard = document.querySelector('#pointsCard');
let questionCard = document.querySelector('#questionCard');

//on the event point Card is clicked, then hide the points and unhide the question
pointsCard.addEventListener("click", (e) => {
  questionCard.classList.remove("hidden");
  pointsCard.classList.add("hidden");
});
//on the event an answer is submitted, the card becomes empty 
let input = document.querySelector('#input')
let question = document.querySelector('#question')
//unhide in above functions
submitButton.addEventListener("click", (e) => {
  input.classList.add("hidden");
  question.classList.add("hidden");
})
