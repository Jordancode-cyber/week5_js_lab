 // Display a message in the console
 console.log("Welcome to Week 5 JavaScript Lab!");
 // Change HTML content when the button is clicked
 function changeText() {
  document.getElementById("demo").innerHTML = "Hello from JavaScript!";
 }

 //Working with Variables and Data Types
 let name = "Jordan";
 const age = 25;
 var isStudent = true;
 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof isStudent);

 //Arithmetic and String Operations
 let a = 10;
 let b = 5;
 let sum = a + b;
 console.log("Sum: " + sum);
 let greeting = "Hello " + name + ", welcome to JavaScript!";
 console.log(greeting);

//Conditional Statements
  let score = 85;
 if (score >= 90) {
  console.log("Grade: A");
 } else if (score >= 70) {
  console.log("Grade: B");
 } else {
  console.log("Grade: C");
 }

 //Loops
  for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
 }
 let j = 0;
 while (j < 3) {
  console.log("While Loop iteration: " + j);
  j++;
 }

//Functions
 function greetUser(username) {
  return "Hello, " + username + "!";
 }
 let message = greetUser("Alice");
 console.log(message);

//Arrays and Objects
 let fruits = ["Apple", "Banana", "Mango"];
 console.log(fruits[0]);
 fruits.push("Orange");
 console.log(fruits);
 let student = {
  name: "John",
  age: 22,
  course: "DIT"
 };
 console.log(student.name + " is studying " + student.course);

//DOM Manipulation
 function changeColor() {
  let text = document.getElementById("colorText");
  text.style.color = "blue";
  text.style.fontWeight = "bold";
 }

//Mini Challenge:
let num1 = Number(prompt("Enter first number:"));
 let num2 = Number(prompt("Enter second number:"));
 let total = num1 + num2;
 alert("The sum is: " + total);

function sayHello() {
  let name = document.getElementById("userInput").value;
  document.getElementById("greetingMsg").innerHTML = "Hello, " + name + "!";
 }