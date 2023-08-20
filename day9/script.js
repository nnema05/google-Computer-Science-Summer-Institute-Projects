console.log("script running");

// Access all the figures with the card-image class
let pictures = document.querySelectorAll(".card-image");

// TODO: Fill in the properties for the categoryPersonalityTraits object. 
// Each property represents a question category in the quiz.
// Use the Inspector to find the category names, which are the
// start of every figure's ID in the HTML.
//each answer in each property (lets say color) aligns with logical or creative
let categoryPersonalityTraits = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

// Create an object called personalityTraitPoints to store the number of times an answer associates with a given personality trait.
//each personality trait starts at 0 points
let personalityTraitPoints = {
  logical: 0,
  creative: 0,
  introvert: 0,
  extrovert: 0,
};

// Makes every image clickable.
//looping over every single pictures in the picture element with for.each
let current = 0;
let currentId = document.getElementById(current);
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    //whatever is clicked, wherever it's id has a -, the id on either side of that dash is split into 2 items in an array called clicked choice
    let clickedChoice = picture.id.split("-");
    console.log(clickedChoice);
    // Extract the question category and index from the clicked choice.
    let questionCategory = clickedChoice[0];
    let indexInCategory = clickedChoice[1];
    // console.log(`Category: ${questionCategory} Index: ${indexInCategory}`);

    //Uncomment the line below to change/toggle the background yellow.
    //toggle says if it has the class, get rid of it and if not then add it
    picture.classList.toggle("has-background-warning");

    //Obtain and increment the personality trait based on the clickedChoice.
    let personalityTrait = categoryPersonalityTraits[questionCategory][indexInCategory];
    //so when you click mansion in house personality trait extrovert because it's question category variable is house and index is 3 which corresponds to extrovert in the object category personality traits, property house and index 3
    // console.log(personalityTrait)
    //increase what the personality trait is (ex. extrovert) in our oject  personalityTraitPoints
    personalityTraitPoints[personalityTrait] += 1;



    //  Modify the conditional to check if the user clicked the last question.
    //Once the user gets to the last questionCategory which is activty, that's when the quiz is done
    //the three equal signs makes sure both sides of the sign are the same data type
    if (questionCategory === "activity") {
      //when quiz is done, unhid the corresponding html element that has the possible id's, logical-introvert, logical-extrovert, creative-introvert, creative-extrovert
      let resultId;

      // Determine whether resultId begins with #logical- or #creative-
      if (personalityTraitPoints.logical > personalityTraitPoints.creative) {
        resultId = "#logical-";
      } else {
        resultId = "#creative-"
      }

      /// Determine whether resultId ends with introvert or extrovert
      if (personalityTraitPoints.extrovert > personalityTraitPoints.introvert) {
        resultId = resultId + "extrovert";
      } else {
        resultId = resultId + "introvert";
      }

      // TODO: Unhide the result.
      //select the id which is resultId
      let result = document.querySelector(resultId);
      result.classList.remove("hidden");
    }
    //medium challenge
    //hides the old question and shows the next question
    //This method ets rid of the problem that images can be selected on and off and that mutliple images can be selected at once
    currentId.classList.add("hidden")
    current++;

    //shows next
    currentId = document.getElementById(current);
    currentId.classList.remove("hidden");
  });
});
