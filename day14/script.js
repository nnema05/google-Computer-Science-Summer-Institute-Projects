/* Find classes or IDs */
let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");
let clue3 = document.querySelector("#clue-3");
console.log(clue3);
let button2 = document.querySelector("#button2");
console.log(clue1, clue2, button);
let mainBody = document.querySelector("#main-body");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  console.log("clicked button");
  hasPressedKeyButton = true;
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});
/* Second Button for the key - Already done! */
button2.addEventListener("click", (e) => {
  console.log("clicked button 2");
  hasPressedKeyButton2 = true;
  button2.classList.add("hidden");
  console.log(clue3.classList);
  clue3.classList.remove("hidden");
  console.log(clue3.classList);
});

/* Your Code Here */
//Define an array that stores all the keys the user has pressed
const keysPressed = [];
//define the passcode
const passcode = "what";
//define number code
//change to letter code
//MILD 1: change the code “732” to something else and give a different hint so the user can try to figure it out.
const letterCode = "cfg";
//new variable to check if the first passcode check has been done
let hasPassedTheFirstTest = false;
//new variable to check if key has pressed
let hasPressedKeyButton = false;
let hasPressedKeyButton2 = false;
//new variable for refrigerator 
const answer = "refrigerator";
//new variable to check if second test has been passed 
let hasPassedSecondTest = false;
//Listen on the whole window instead a single button, input element or other

window.addEventListener("keypress", e => {
  // e is an object representing the event
  // has a property key which tells you what key is pressed
  // console.log(e.key);
  // Remember all the keys user has pressed
  keysPressed.push(e.key);
  // console.log(keysPressed);

  //MEDIUM CHALLENGE 2: Use a timer! Be creative here. Consider telling the user they only have 1 minute, 30 seconds, or 10 seconds to get the code. Maybe give the user a clue after 30 seconds of trying. You’ll need to look up information and examples about setTimeout().
  //if the user doesn't get past the first test in 5 seconds then lock the user out
  //create a function that locks the user out, sends an alert, makes the background completely white 
  function lockOut() {
    alert("You have been locked out");
    page.classList.remove("has-background-black");
    mainBody.classList.add("hidden");
    clue1.classList.add("hidden");
  }
  //create a set timeout function that says in 5 seconds  run the lockout function
  //display the timer countdown
  let myTimer;
  if (hasPassedTheFirstTest === false) {
    myTimer = setTimeout(lockOut, 10000);
  };

  //FIRST TEST
  //Check if they represent the passcode
  //get last elements (length of the passcode) in the array 
  const lastFour = keysPressed.slice(-passcode.length);
  console.log(lastFour);
  //join the array last Four into a string and check if it is equal to the passcode
  if (lastFour.join("") === passcode) {
    clearTimeout(myTimer);
    console.log("I'm clearing timeout");
    hasPassedTheFirstTest = true;
    //Hide clue 1
    clue1.classList.add("hidden");
    //reveal the button wih key image
    button.classList.remove("hidden");

  }



  //SECOND TEST
  //create missing letters array that has the last elements of keys pressed which is the length of letter code
  //SPCIY: Change your code so that multiple buttons need to be pressed at the same time in order to get into the club. For example, for the code “732”, all the numbers would have to be pressed at the same time. That means 7-3-2 individually should not work anymore. Feel free to use another code with special keys even, like “Shift”, “Enter”, or “Meta”. Here are some hints to get you going:
  //Create an object. Make the keys of your object your individual keys that need to be pressed for the code, and set all the values to false (because the keys aren’t currently pressed).
  // let allKeysPressed = {
  //   firstKey: `${letterCode.charAt(0)}`
  // }
  console.log(allKeysPressed.firstKey);

  let missingLetters = keysPressed.slice(-letterCode.length);
  //join the array missing letters into a string and check if it is equal to the passcode
  if (missingLetters.join("") === letterCode && hasPassedTheFirstTest && hasPressedKeyButton) {
    hasPassedSecondTest = true;
    clue2.classList.add("hidden");
    button2.classList.remove("hidden");
  }

  //THIRD TEST
  //MEDIUM: Add 1 other test that the user must go through in order to get into the club. You have free reign here! Be creative here and use a window event listener. 
  const answerLetters = keysPressed.slice(-answer.length);
  console.log(answerLetters.length);
  console.log(keysPressed.length);
  //join the array answerLetters into a string and check if it is equal to the answers
  //check if keys pressed is 19 (whatcfg is 7) and (refrigerator is 12) so 12 + 7 is 19, and so the user only has one choice to guess then only take them to the welcome page if keys pressed length is equal to 19
  if (keysPressed.length === 19 && hasPassedTheFirstTest && hasPassedSecondTest && hasPressedKeyButton && hasPressedKeyButton2) {
    if (answerLetters.join("") === answer) {
      //get rid of black background
      page.classList.remove("has-background-black");
      //MILD 2: change the background color for the reveal from white to what ever you like
      page.classList.add("red");
      //change the div body to have an image displayed
      //MILD 3: change the revealed gif to another one that is more personalized to what your secret club would be about.
      body.innerHTML = '<div class="image center"><img id="main" src="https://media2.giphy.com/media/3o6fIUZTTDl0IDjbZS/200.webp?cid=ecf05e47m0pkweb9v3v6h9kl62fva3an5pzto4gtdbctonaq&rid=200.webp&ct=g"></div>';
      //if messes up kick them out 
    } else {
      alert("You have been locked out");
      page.classList.remove("has-background-black");
      mainBody.classList.add("hidden")
    }
  }
});

