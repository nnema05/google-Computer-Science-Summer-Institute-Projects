console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
let correctGuesses = 0;
//adding an event listener that waits for the input to change
inputField.addEventListener('change', e => {
  // console.log("guessed!")
  //Get the user's guess
  //use .value property on input field to get user's guess and save it to variable
  //const guess = inputField.value
  // console.log(guess)
  //If it's English, unhide the English box
  //use or operator to take in upper and lower case english!
  // if (guess === "English" || guess === "english") {
  //   //get english box
  //   //add class list property that has a remove method to remove the class (in this case remove the hidden class)
  //   //The tile is hidden (we are on the first time the user has guessed the language correctly), get rid of the hidden class and increase correct guesses by 1. Below code ensures that if you guess the same language more than once, you don't get credit for it (correct guesses doesn't increase) more than once
  //  let hidden = englishTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     englishTile.classList.remove("hidden")
  //   }

  // } 
  // //do this for rest of languages with multiple if statements
  // if (guess === "Spanish" || guess === "spanish") {
  //   let hidden = spanishTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     spanishTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Chinese" || guess === "chinese") {
  //   let hidden = chineseTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     chineseTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Tagalog" || guess === "tagalog") {
  //   let hidden = tagalogTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     tagalogTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Vietnamese" || guess === "vietnamese") {
  //   let hidden = vietnameseTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     vietnameseTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Arabic" || guess === "arabic") {
  //   let hidden = arabicTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     arabicTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "French" || guess === "french") {
  // let hidden = frenchTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     frenchTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Korean" || guess === "korean") {
  //   let hidden = koreanTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     koreanTile.classList.remove("hidden")
  //   }
  // }
  // if (guess === "Russian" || guess === "russian") {
  //   let hidden = russianTile.classList.contains("hidden")
  //   if(hidden === true) {
  //     correctGuesses += 1;
  //     russianTile.classList.remove("hidden")
  //   }
  // }

  //FOR LOOP!
  //create const guess that is changed so no mater what the input is, it is stored so the first letter is uppercarse to match all the html ids
  //turning the first (0) charecter of the guessed word and make it uppercase, then take the sliced (.slice) section from character 1 to the end and add it to the uppercase
  const guess = inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1)
  console.log(guess)
//Create a list of all of the languages
  languageList = ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean", "Russian"];
  //create for loop that iterates through language list and checks if it's index is equal to the guess of the user. If so it increases correct guesses by 1 and removes the hidden class in the tile
  for(let i = 0; i<languageList.length; i++) {
    console.log(i)
    if(languageList[i]===guess) {
      //The tile is hidden (we are on the first time the user has guessed the language correctly), get rid of the hidden class and increase correct guesses by 1. Below code ensures that if you guess the same language more than once, you don't get credit for it (correct guesses doesn't increase) more than once
  //that means start by creating a variable hidden that checks if the class hidden is contained on the tile
  let hidden = document.querySelector(`#${guess}`).classList.contains("hidden")
  //if the class is hidden is true (meaning the variable will come back as true), then correct guesses will increase by 1 and the hidden class will be removed. After that hidden will always evaluate to false for that language and then correct guesses will never increase if you guess the same language more than once
  //Want to select the specific language tile based on the user input (guess) so we use the document query selector and select for the id that is the value of guess
  if (hidden === true) {
    correctGuesses += 1;
    document.querySelector(`#${guess}`).classList.remove("hidden")
  }
      //add this to break out of the loop once the guess and index of the list are equal to each other
      { break; }
    }
  }

  console.log(`Number of correct guesses: ${correctGuesses}`);
  //if the correct guesses is 9, change the section to a congrats message!
  if (correctGuesses == 9) {
    let mainText = document.querySelector("#mainText")
    mainText.innerHTML = "Congrats! You have guessed all 9 languages!"
  }

  //clear our input
  inputField.value = "";
})

