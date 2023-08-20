console.log("running");

/** OBJECTS */
// let make = "Toyota";
// let model = "Corolla";
// let year = 2019;

//instead turn the variable into an object which use curly brackets
//objects have properties
// let myCar = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2019
// };

// let carTitle = myCar.year + " " + myCar.make + " " + myCar.model;
// console.log("My car is a " + carTitle + " for now")

// //can change the properties in object
// myCar.make = "Ford";
// myCar.model = "F-150";

// console.log("My new car is a ", myCar.year, myCar.make, myCar.model);


/** ARRAYS */
// //index               0      1      2        3        4
// let favoritePets = ["cat", "dog", "pig", "lizard", "snake"];
// console.log(favoritePets[3]);

// //can change the array
// //to add something to the array use a method called push 
// favoritePets.push("guinea pig");
// console.log(favoritePets);

// //consoles log the index of dog
// console.log(favoritePets.indexOf("dog"))


/** OBJECTS WITH ARRAYS */
//create an object with an array
// let tutor1 = {
//   name: "Mario",
//   subject: "English",
//   age: 28,
//   students: ["Diana", "Nadeem", "Ben"],
// };
// //can push a new item to the student array, which is a property in tutor 1 object
// tutor1.students.push("Nandini");
// console.log(tutor1);

// /** ARRAYS WITH OBJECTS */
// let tutor2 = {
//   name: "Sam",
//   subject: "Math",
//   age: 25,
//   students: ["Nadeem", "Carlos", "Karla"],
// }

// //creating an array with both tutors
// let allTutors = [tutor1, tutor2];
// //will log Sam and all of his properties
// console.log(allTutors[1]);

// /** ARRAY ITERATION */
// //create array 
// let meals = ["Breakfast", "Lunch", "Snack", "Dinner", "Desert"];
// meals.push("Midnight snack");

// //in for loop can use variable i to represent index
// //then log all of the meals in a sentence
// //to go through entire array which i < the length of the array no matter what the length is 

// //Iterating by index
// for (let i = 0; i < meals.length; i++) {
//   console.log(`I ate a big ${meals[i]}`);
// };

// //Iterating by value!
// //defining of a new variable which represents each of the values in my array meals 
// for (let meal of meals) {
//   console.log(meal);
// }

// * MILD CHALLENGE * //
//Musician’s Bio (Object)
//Create an object called “musician” with properties: name, instrument, age, and yrs_experience. Fill in these values yourself.
//Print using console.log() a one-sentence biography about this musician using these properties.
//Add the boolean property “prodigy” to the object which is true if yrs_experience is greater than 10 and if the age is less than 18.
// let musician = {
//   name: "Sam",
//   instrument: "guitar",
//   age: 25,
//   years_Experience: 11,
//   prodigy: true
// }
// console.log("Meet" + " " + musician.name + " who plays the" + " " + musician.instrument + " and is" + " " + musician.age + " years old with" + " " + musician.years_Experience + " years of experience")

// if(musician.years_Experience>10 && musician.age<18){
//   musician.prodigy = true;
// }
// else {
//   musician.prodigy = false;
// }


// console.log(musician.prodigy)


//Colors (Arrays)
//Declare an array of 9 colors.
//Print the color at index 4.
//Add the color “chartreuse” to the array.
//Print the index of the color “blue” in your array.
// let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "white", "black"];
// console.log(colors[4]);
// colors.push("chartreuse");
// console.log(colors);
// console.log(colors.indexOf("blue"))

// * MEDIUM challenge * //
// //Student Info (Objects)
// //Create an object called “student” with properties: first name, last name, id, and grades (array). Fill in the property values as you wish. Give the student 4 grades (out of 100) as an array.
// //Write a program that accesses this object and does the following:
// //Print the full name (first name + last name),
// //Print the student’s gpa (average grade / 25),
// //Add a property to the object called “honors”. If the gpa is more than or equal to a 3.5, it should say true, otherwise, false.
// let student = {
//   first_name: "Violet",
//   last_name: "Smith",
//   id: 38,
//   grades: [90,85,100,97],
// }

// // //create a GPA = average of grades/25
// //first find the sum of the grades of the student
// let sum = 0;
// for(i=0; i<student.grades.length; i++) {
//   sum = sum + student.grades[i]
//   console.log(sum)
// }
// //then find avergae
// let average = sum/student.grades.length;
// console.log(average)

// let gpa = average/25;
// console.log(gpa)


// //create a function that prints first and last name, gpa and creates a new honors property all at once
// function violet() {
//   //prints the first and last name
//   console.log(student.first_name + " " + student.last_name);
//   //prints GPA
//   console.log(gpa)
//   //creating a new honors propety based on GPA
//   if(gpa>=3.5) {
//   student.honors=true;
// } else {
//   student.honors=false;
// }
// console.log(student.honors);
// }

// //call the function!
// violet();


//5 Letter Words (Arrays)
//Copy, paste, and complete the following code. Print out the number of 5 letter words in the following array. Look up how to use “.length”.

// const all_words = [
//   "control",
//   "discussion",
//   "hope",
//   "swing",
//   "frantic",
//   "clam",
//   "judge",
//   "alive",
//   "incompetent",
//   "dress",
//   "heave",
//   "splendid",
//   "zippy",
//   "jeans",
//   "regret",
//   "kick",
//   "sentence",
//   "clever",
//   "oafish",
//   "treat",
//   "mine",
//   "kneel",
//   "smile",
//   "soar",
//   "murky",
//   "bitter",
//   "lively",
//   "protest",
//   "fluttering",
//   "elderly",
//   "sidewalk",
//   "shout",
//   "sew",
//   "chase",
//   "miscreant",
//   "merge",
//   "assort",
//   "swift",
//   "fireman",
//   "square",
//   "wash",
//   "ball",
//   "summer",
//   "send",
//   "digestion",
//   "office",
//   "space",
//   "lose",
// ];

//* Your code */
//find all the words that are greater than length of 6 words using filter method on all words 
//the filter method is going through each element on the list all words and checking if it passes the test (greater then length 6), if true it keeps that element and stores it in result 
//creating a new variable called all word that represents each element in the list one at a time and check if the length of that word is greater than 6
// const result = all_words.filter(all_word => all_word.length > 6);
// console.log(result)

// //OR create a for loop that checks the length of every word
// let result = [];
// for(i=0; i<all_words.length; i++) {
//   if(all_words[i].length > 6) {
//     result.push(all_words[i])
//   }
// }
// console.log(result);

// //now check length of array and store that in a varaible called count
// const count = result.length
// console.log(count)


//* SPICY */
//Descrambler (Arrays)
//In the following code, scrambled_numbers tells you what place the corresponding word in scrambled_words should be in. Copy, paste, and complete the code so that the program simultaneously unscrambles (sorts) the numbers and the strings to reveal the hidden message.

// const scrambled_numbers = [
//   9, 25, 28, 22, 21, 0, 27, 14, 23, 26, 13, 12, 19, 20, 7, 29, 4, 6, 15, 17, 16,
//   24, 5, 3, 8, 1, 2, 11, 18, 10,
// ];
// const scrambled_words = [
//   "in",
//   "and",
//   "their",
//   "away",
//   "mile",
//   "Before",
//   "have",
//   "when",
//   "from",
//   "you",
//   "way",
//   "That",
//   "are",
//   "a",
//   "a",
//   "shoes.",
//   "you",
//   "walk",
//   "you",
//   "them,",
//   "criticize",
//   "them",
//   "should",
//   "someone,",
//   "mile",
//   "you",
//   "criticize",
//   "shoes.",
//   "you",
//   "their",
// ];


// /* Your code - Note: save your unscrambled array of words as "unscrambled_words" */
// //create a key value pair of the numbers and words by combining the arrays
// //this orders the numbers and gives the message in an object called unscrambled object

// var unscrambledObject = scrambled_words.reduce(function(result, field, index) {
//   result[scrambled_numbers[index]] = field;
//   return result;
// }, {})

// console.log(unscrambledObject)

// //get the values (just the words) from the object array and put it in unscrambled_words array
// unscrambled_words = Object.values(unscrambledObject);
// console.log(unscrambled_words)

// let secret_message = unscrambled_words.join(" ");
// console.log(secret_message);


//SECOND SOLUTION 
// 1.) Create an empty array representing our decoded message
// 2.) Loop over our scrambled arrays,
//      + get the final/target index . ie, where it should go
//      + drop the word in its correct place
// [_, _, _, ..., in, _, _, ...]

// let decodedMessage = []
// for (let i = 0; i < scrambled_words.length; i++) {
//   decodedMessage[i] = "";
// }
// console.log("Decoded message: " + decodedMessage);

// for (let i = 0; i < scrambled_numbers.length; i++) {
//   // Determine where the word should go in the decoded message.
//   let finalIndex = scrambled_numbers[i];
//   // Place the word in the decoded message
//   decodedMessage[finalIndex] = scrambled_words[i];
//   console.log(`decoded message: ${decodedMessage}`);
// }





//Top Students (Objects & Arrays)
// Create a list of 5 student objects who all have a first name, last name, id, and 4 grades (array). Fill in the properties values as you wish.
// In a loop, add a “gpa” property to each object and set it to the (average grade / 25).
// Sort the array so that the students are in order of GPA.
// Print out the student’s first name and their GPA.
// let studentOne = {
//   first_name: "Liam", 
//   last_name: "Miller",
//   id: 10,
//   grades: [60, 75, 65, 80],
// }

// let studentTwo = {
//   first_name: "Susan", 
//   last_name: "White",
//   id: 15,
//   grades: [90, 95, 92, 98],
// }

// let studentThree = {
//   first_name: "Ellie", 
//   last_name: "Smith",
//   id: 22,
//   grades: [30, 32, 40, 50],
// }

// let studentFour = {
//   first_name: "Mike", 
//   last_name: "Lee",
//   id: 43,
//   grades: [75, 80, 77, 82],
// }

// let studentFive = {
//   first_name: "Tom", 
//   last_name: "Green",
//   id: 50,
//   grades: [100, 98, 97, 100],
// }

// //combine students into a list
// let allStudents = [studentOne, studentTwo, studentThree, studentFour, studentFive];
// console.log(studentOne)

// for(let i=0; i < allStudents.length; i++) {
//   //average of each students grades
//   let average = array => allStudents[i].grades.reduce((a, b) => a + b) /allStudents[i].grades.length;
// //calculate gpa from average
// let gpa = average(allStudents[i].grades)/25;
//   console.log(gpa)
//   //add gpa as a property to each student
//   allStudents[i].gpa = gpa
//   console.log(allStudents[i])
// }

// //order gpa from lowest to highest 
// let res = allStudents.sort(({gpa:a}, {gpa:b}) => a-b);
// console.log(res);

// //print all students names and gpa
// for(let i=0; i < allStudents.length; i++) {
//   console.log(allStudents[i].first_name + " " + allStudents[i].last_name, allStudents[i].gpa)
// }
