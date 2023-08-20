console.log("script running!");

//Reference to button 1
const button1 = document.querySelector("#button1");
//add an event listener to button 1, on the event it clicks, we are going to do a function (everything between curly braket runs)
button1.addEventListener('click', e=> {
  console.log("button 1 pressed!");
  //add an alert that comes up when button is pressed
  alert('Meh-eh-eh-eh-eh');
})

//Play Button: Tippy
// play to increase happiness level by 1 but decrease energy level by 1
//create happiness level variable
let tippyHappyLevel=0;
let tippyEnergyLevel=10;
//reference playbutton and tippy happy status and tippy energy status 
const playButton = document.querySelector("#playButton");
const tippyHappyStatus = document.querySelector('#tippyHappyStatus')
const tippyEnergyStatus = document.querySelector('#tippyEnergyStatus')
//add event listener for what happens when play button is clicked
playButton.addEventListener('click', e => {
  console.log("playButton pressed!");

  //if statement
 if(tippyHappyLevel==10) { 
    //Once max happy level and minimum level, alert the user!
    //Alert
     alert("Tippy is at his happiest, but his lowest energy :(. Don't drain more energy!");
  } else {
    //Not too much happiness, or too little energy, keep incrementating and change status

   //increase happiness by 10 and decrease energy by 10
  tippyHappyLevel++;
  tippyEnergyLevel--;
      //change the text or status of status 3 to coco has had 2 carrots today
  //carrots in text needs to change as the button is clicked so concatonate the variable carrots to the text 
   
  tippyHappyStatus.innerHTML = "Tippy is at happiness level " + tippyHappyLevel + "!";
    tippyEnergyStatus.innerHTML = "Tippy is at energy level " + tippyEnergyLevel + "!";
  }
});

//Button 2: Brodie
//Change text when button is pressed
//Reference to button 2
const button2 = document.querySelector("#button2");
button2.addEventListener('click', e=> {
  //log on the console when the button is pressed
  console.log("button 2 pressed!");
  //go to wesbite, find the element that the text is which is status 2 and reference it
  const brodieStatus = document.querySelector('#status2')
  //now change the text or status of status 2
  brodieStatus.innerHTML = "Thanks for petting Brodie! He looks really happy!";
});

//Button 3:Coco
//Add 1 to the number of carrots when the button is pressed
//Medium challenge: also add alert and1 disable the button when Coco is full at 6 carrots
//define a variable that would keep track of the # of carrots, outside event listener!
let carrots = 2;
//Reference button 3
const button3 = document.querySelector("#button3");
//to change text below the picture of Coco, go to wesbite, find the element that the text is which is status 3 and reference it
const cocoStatus = document.querySelector('#status3')
button3.addEventListener('click', e=> {
  //log on the console when the button is pressed
  console.log("button 3 pressed!");
  //we are getting the alert once we hit 7 so console log to debug
  console.log("Coco has had 2 carrots")
  console.log("Coco has already had" + carrots + " carrots")
  //add if statement, once it hits 7 alert to stop feeding goat and disable the button
//checking what she has already eaten, so increment carrots before hand so if statement checks how many carrots she eaten plus more
//everytime we press button, we want to add one onto carrots variable
carrots +=1;
  
  if(carrots >= 7) { 
    //Too many carrots, stop feeding Coco, add alert and disable button
    //Alert
     alert("Please don't overfeed our goat");
    //Disable Button 
    button3.disabled = true;
  } else {
    //Not too many carrots, keep feeding Coco
      //change the text or status of status 3 to coco has had 2 carrots today
  //carrots in text needs to change as the button is clicked so concatonate the variable carrots to the text 
  cocoStatus.innerHTML = "Coco has had " + carrots + " carrots today";
  }

});

//Button 4: Arno
//Remove rest of the content
//Add a warning message
//Reference button 4
const button4 = document.querySelector("#button4");

//event listener

function alligatorAlertFunction() {
  const userResponse = 
    confirm('Are you sure?');
  if(userResponse) {
    alligatorContainerFunction();
  } 
};

button4.addEventListener('click', alligatorAlertFunction);

function alligatorContainerFunction() {
  const container = document.querySelector(".container")
  container.innerHTML = '<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed<h1>'
};


//Button 5: Elmo
//Add an alert that says crunch
//Increment the bamboo counter
//make bamboo variable to hold # of bamboo sticks
let bamboo = 2;
//reference buttoon and status of text
const button5 = document.querySelector("#button5");
const elmoStatus = document.querySelector('#status5')
button5.addEventListener('click', e => {
  console.log("button 5 pressed");
  //increment button
  bamboo +=1;
  elmoStatus.innerHTML = "Elmo has " + bamboo + " bamboo sticks today."
  //add alert
  alert('Crunch!')
});
