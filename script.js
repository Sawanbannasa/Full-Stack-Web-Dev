// const readline = require("readline");
/*
console.log("Hello, World!");
// Data types in JavaScript
let string = "Hello, JavaScript!"; // String
let number = 42; // Number
let boolean = true; // Boolean
let bigInt = 9007199254740991n; // BigInt

let undefinedValue; // Undefined
let nullValue = null; // Null

let symbol = Symbol("unique"); // Symbol

// Variable declarations
let score = 100; // Using let
let name = "Alice"; // Using let
let isActive = true; // Using let

// Object
let fruits = ["apple", "banana", "orange"]; 
let object = { name: "John", age: 30 };

// Operations
let sum = number + 10;
let bonus = 25;
let totalScore = score + bonus;
let addition = 5 + 3; // Addition
let subtraction = 10 - 4; // Subtraction
let multiplication = 6 * 7; // Multiplication
let exponentiation = 2 ** 3; // Exponentiation
let division = 20 / 5; // Division
let modulus = 10 % 3; // Modulus
let increment = 5; increment++; // Increment
let decrement = 10; decrement--; // Decrement  

// Comparison operators
let isEqual = (number == 42); // Equal to
let isNotEqual = (number != 50); // Not equal to
let isStrictEqual = (number === 42); // Strict equal to
let isStrictNotEqual = (number !== 50); // Strict not equal to
let isGreaterThan = (number > 30); // Greater than
let isLessThan = (number < 50); // Less than
let isGreaterThanOrEqual = (number >= 42); // Greater than or equal to
let isLessThanOrEqual = (number <= 42); // Less than or equal to

// Logical operators
let andOperator = (isActive && boolean); // AND operator
let orOperator = (isActive || boolean); // OR operator
let notOperator = !isActive; // NOT operator

// Conditional statements
if (score > 90) {
    console.log("Excellent score!");
} else if (score > 75) {
    console.log("Good score!");
} else {
    console.log("Keep trying!");
}

// Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Arrow function
const square = (num) => num * num;
console.log(square(5));

// Arrays
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); 

// Error handling
try {
    let result = number / 0; // This will not throw an error in JavaScript, but let's simulate an error
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed.");
}               

//  check if the number is greater than another number
 let a = 4, b = 5;
 if(a > b){
    console.log("a is greater thab b");
 }else{
    console.log("b is greater than a");
 }

// check if the string is equal to another string 
let distruct = "kalyaan", ruined = "kalyaan", marriage = "kalyanam";
 if( distruct === marriage){
    console.log(" strings are eqaul");
 }else{
    console.log(" strings are not equal");
 }

// check if the variable is a number or not
let age = 21, name = "Amit", height = 6;
 if( !isNaN(name)){
    console.log("It's a number");
 }else{
    console.log("It's NaN");
 }

//check if the boolean value is true
let age = 0, name = "Amit";
if (name) {
    console.log("value is true")
}else{
    console.log("value is false")
}

//check if the array is empty or not
let arr=[1,2,3,4,5]
let arr2=[]

if (arr2.length==0){
    console.log("Array is empty")
}else{
    console.log("Array is not empty")
}
//Araay chalanges 
//1. store  the first element of an array in a variable and print it
let fruits=["mango","apple","watermelon","lichi","banana"]
let fistelem = fruits[0];
console.log(fistelem)

//2. store the third element of an array in a variable and print it
let thirdElem = fruits[2];
console.log(thirdElem)

//3. change the second element of an array in a variable and print it
firuits[1] = "grapes";
console.log(fruits[1])

//4. add a new element to the end of an array and print the updated array
let cityvisited = ["bhopal","indore","ujjain","dhar"]
cityvisited.push("ahmedabad");
console.log(cityvisited)

//5. remove the last element of an array and print the removed element
let removedCity = cityvisited.pop();
console.log(removedCity)

//6. create a soft copy of an array and print it
let favfruits = fruits;
console.log(favfruits);
console.log(fruits);

//7. create a hard copy of an array and print it
let hardCopyFruits = [...fruits];
console.log(hardCopyFruits);
console.log(fruits);
// alternative way to create a hard copy of an array
let hardCopyFruits2 = fruits.slice();
console.log(hardCopyFruits2);
console.log(fruits);

8. create two new arrays and merge them into a single array and print the merged array
let vegetables = ["carrot", "broccoli", "spinach"];
let grains = ["rice", "wheat", "oats"];

let vegan = vegetables.concat(grains);
console.log(vegan);

//9. create an array and print the length of the array
let colors = ["red", "green", "blue", "yellow"];
let arrlengh = colors.length;
console.log(arrlengh);

//10. create an array and check that the element is included in the array or not 
let cities =["indore", "bhopal", "sagar", "dhar", "ujjain", "gwalior"];
let isIncluded = cities.includes("bhopal");
console.log(isIncluded);

*/
//loops
// let sum = 0;
// let i = 1;
// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log("Sum:"+sum);

//write a while loop count 5 to 1 and that stores the numbers in an array
// let contdowm = [];
// let j = 5
// // let count = 5
// while (j>0) {
//     contdowm.push(j)
//     j--;
// }
// console.log(contdowm)

//write a do while loop and get the user input in an array untill user enter "stop"
// let userinput;
// let input = []
// do {
//     userinput = prompt("enter something ")
// if (userinput != "stop"){
//     input.push(userinput)
// }

// }
// while(userinput != "stop")

