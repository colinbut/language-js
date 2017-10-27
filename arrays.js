var fruits = ["Banana", "Orange", "Apple", "Mango"];

// remove last element from array
console.log(fruits.pop());

fruits.push("Grapes"); // adds new element to end of array

fruits.shift(); // removes first element from array

fruits.unshift("Lemon"); // adds new element to start of array

var lemon = fruits[0];

console.log('The length of the array is: ' + fruits.length);

delete fruits[0];// deletes first element from array (but maintains index positions) - becomes undefined

fruits.splice(2,0,"Melon","Kiwi");


var myGirls = ["Emily", "Lisa"];
var myBoys = ["Sebastian", "Christian", "Tobias"];
var boysAndGirls = myGirls.concat(myBoys); // joins the 2 arrays

var stationary = ["pen", "ruler", "paper"];
var coffees = ["latte","americano","macchiato","cappucino","expresso","flat white"];
var games = ["mario", "sonic", "x-men"];
var allArrays = stationary.concat(coffees,games);

// array slicing
// slice out a piece of array into a new array
var cars = ["Honda","Mazda","Hyundai","Peugeot","Ford"];
var euroCars = cars.slice(3,4);

console.log(cars.toString());

console.log(coffees.join(" * "));

/*
 * Sorting Arrays
 */
var clothes = ["scarf", "hat", "shoe", "gloves", "sweater", "jumper", "zipper"];
clothes.sort();
clothes.reverse(); // can use to sort array in descending order

// using compare function to provide custom sorting rules
var numbers = [40,100,1,5,25,10];
numbers.sort(function (a,b) {
  return a - b;
});
