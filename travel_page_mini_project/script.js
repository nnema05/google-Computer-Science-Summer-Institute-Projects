
//clicking Click Me button will hide flag and title and take to the shopping, dining and activties section
//select button 
let clickMeButton = document.getElementById("clickMeButton");
//select what needs to be hidden once button is clicked
let welcomeSection = document.getElementById("welcomeSection");
//select what needs to be unhidden once button is clicked
let categories = document.querySelector(".categories");
//event listener
clickMeButton.addEventListener("click", (e) => {
  //hide welcome section
  welcomeSection.classList.add("is-hidden");
  //unhide categories
  categories.classList.remove("is-hidden");
});



let idNumber = 1
//Shopping category
//select shopping button
let shoppingButton = document.getElementById("shoppingButton");
//On the event the shopping button is clicked
shoppingButton.addEventListener("click", (e) => {
  //select first shopping location
  let shoppingLocation = document.getElementById(`shoppingLocation${idNumber}`)
  // remove hidden class
  shoppingLocation.classList.remove("is-hidden");
  //increment id number by 1
  idNumber += 1
  console.log(idNumber)
  //since there are 3 locations id will increment to 4
  //once that happens disable to button so all shopping locations are shown
  if (idNumber == 4) {
    shoppingButton.disabled = true;
  }
});


//Dining category
//select dining button
let diningButton = document.getElementById("diningButton");
//On the event the dining button is clicked
diningButton.addEventListener("click", (e) => {
  //select first dining location
  let diningLocation = document.getElementById(`diningLocation${idNumber}`)
  // remove hidden class
  diningLocation.classList.remove("is-hidden");
  //increment id number by 1
  idNumber += 1
  console.log(idNumber)
  //since there are 3 locations id will increment to 4
  //once that happens disable to button so all dining locations are shown
  if (idNumber == 4) {
    diningButton.disabled = true;
  }
});


//Activity category
//select activity button
let activityButton = document.getElementById("activityButton");
//On the event the activity button is clicked
activityButton.addEventListener("click", (e) => {
  //select first activity
  let activity = document.getElementById(`activity${idNumber}`)
  // remove hidden class
  activity.classList.remove("is-hidden");
  //increment id number by 1
  idNumber += 1
  console.log(idNumber)
  //since there are 3 locations id will increment to 4
  //once that happens disable to button so all activity locations are shown
  if (idNumber == 4) {
    activityButton.disabled = true;
  }
});

