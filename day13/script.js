"use strict";

//get all of the elements where the class is topping, check out button, total div, order div, and all of the toppings in the nav bar 
const toppings = document.querySelectorAll(".topping");
const checkoutButton = document.querySelector("#checkout");
const totalDiv = document.querySelector("#total");
const tomatoNav = document.querySelector("#tomatoNav");
const navToppings = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
const bunTopping = document.querySelector("#bunOrder");
console.log(bunTopping);
const orderToppings = document.querySelectorAll("#wrapper .order .forButton .topping");
console.log(orderToppings);
const toppingImage = document.querySelectorAll(".order .forButton .topping .toppingImage");
console.log(toppingImage);
//add to cart buttoon
const cartButton = document.querySelector("#addToCart");
console.log(cartButton);
const cartTotalDiv = document.querySelector("#cartTotal");



// Show the dataset property for every topping.
toppings.forEach((topping) => {
  topping.addEventListener("click", () => {
    // TODO: Log the dataset property of the topping.
    //access attributes that start with data
    console.log(topping.dataset);
  });
});

// TODO:  Implement the Checkout Button. This should:
//        1) Calculate the total price of the burger on the page.
//            + get the toppings on the burgr
//            + get the value of a topping 
//            + add the value to a total price
//        2) Place the total price on the page.
checkoutButton.addEventListener("click", (e) => {
  console.log("checkout button pressed");
  //crate a total price variable in event listener so total resets each time
  let total = 0.00
  const toppingDivs = document.querySelectorAll(".order .topping");
  console.log(toppingDivs);
  //for loop to iterate through toppingDivs array 
  for (let i = 0; i < toppingDivs.length; i++) {
    //create a variable that includes price of topping
    //converts the price from a string to a number
    let price = Number(toppingDivs[i].dataset.price);
    //create a variable that includes the name of the topping/ingredient
    let ingredient = toppingDivs[i].dataset.ingredient;
    //add the topping price to the total
    total += price;
  }
  console.log(`Total price is $${total}`);
  totalDiv.innerHTML = `Your total price is $${total}`;
});

// TODO:  Implement the Add Topping feature. This should:
//        1) Recognize when a user clicks on an ingredient in the nav bar.
//        2) Add a new div to the order div for the ingredient the user clicked.
//           This new div should have the same classes and data attributes as 
//           the existing topping.
//          You don't need to worry about the order of the topping. 
//          Our CSS takes care of this for us. 

//example for specifically tomato 
// tomatoNav.addEventListener('click', () => {
//   console.log('tomato nav clicked');
// });
// //expected format of new div to cretae
// <div class="topping tomato" data-ingredient="tomato" data-price="0.30">
//      Tomato
//    </div>
//create new tomato div
//   let newTomatoDiv =
//     `<div class="topping tomato" data-ingredient="tomato" data-price="0.30">
//          Tomato
//       </div>`
//   //add this div to the total order div
//   orderDiv.innerHTML += newTomatoDiv;

// });

//for all toppings in nav register a click event for each nav ingredient to add that ingredient to the order div
//for of loop so you get one topping for all of the toppings in navToppings one at a time so each topping clicked will run the steps below
for (let topping of navToppings) {
  topping.addEventListener('click', (e) => {
    //create variable for topping name and get the dataset attribute called ingredient
    //do the same for the price
    let toppingName = topping.dataset.ingredient;
    let toppingPrice = topping.dataset.price;
    let toppingImageUrl = toppingImage.src;
    //undefined
    console.log(toppingImageUrl);
    //create a new topping div that includes the variables to change the div so it works for every topping
    let newToppingDiv =
      `<div class="topping ${toppingName}" data-ingredient="${toppingName}" data-price="0.30">
         ${toppingName}
         <img class="toppingImage"
            src="${toppingImageUrl}" />
      </div>`;
    orderDiv.innerHTML += newToppingDiv;
  });
}

//Medium challenge
for (let topping of orderToppings) {
  topping.addEventListener('click', (e) => {
    topping.remove();
  })
}


//Spicy challenge
//Create a shopping basket – whenever you add a burger to your shopping basket, it updates an overall cart total and then resets the burger to its original state so you can build another. You may want to think about changing, adding, or removing some buttons or divs.
let cartTotal = 0.00

cartButton.addEventListener("click", (e) => {
  console.log("cart button pressed");
  //crate a total price variable in event listener so total resets each time
  const toppingDivs = document.querySelectorAll(".order .topping");
  console.log(toppingDivs);
  //for loop to iterate through toppingDivs array 
  for (let i = 0; i < toppingDivs.length; i++) {
    //create a variable that includes price of topping
    //converts the price from a string to a number
    let cartPrice = Number(toppingDivs[i].dataset.price);
    //create a variable that includes the name of the topping/ingredient
    let cartIngredient = toppingDivs[i].dataset.ingredient;
    //add the topping price to the total
    cartTotal += cartPrice;
  }
  console.log(`Cart total price is $${cartTotal}`);
  cartTotalDiv.innerHTML = `Your cart total price is $${cartTotal}`;
  // orderDiv.location.reload();
});

//reload order duv
// function updateDiv() {
//   $( "#order" ).load(window.location.href + " #order");
// }
