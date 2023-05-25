// File: bigScript.js

// This is a large JavaScript file for testing or demonstration purposes

// Create an array of 1 million numbers
const array = [];
for (let i = 0; i < 1000000; i++) {
  array.push(i);
}

// Function to find the sum of the array
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Calculate the sum of the array
const sum = calculateSum(array);
// console.log("Sum of the array: " + sum);

// Function to find the maximum value in the array
function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Find the maximum value in the array
const max = findMaxValue(array);
// console.log("Maximum value in the array: " + max);

// Filter even numbers from the array
const evenNumbers = filterEvenNumbers(array);
// console.log("Even numbers in the array: " + evenNumbers.length);

// ... Add more code or functions as needed ...

// End of the bigScript.js file

function exe(){
    func1(10);
}

function func1(str){
    func2(str);
}

function func2(str){
    func3(str);
}

function func3(str){
    func4(str);
}

function func4(str){
    func5(str);
}

function func5(str){
    func6(str);
}

function func6(str){
    func7(str);
}

function func7(str){
    func8(str);
}

function func8(str){
    func9(str);
}

function func9(str){
    convertUpperCase(str);
}

// Function to convert string to uppercase
function convertUpperCase(str) {
    str.toUpperCase();
}

// Function to filter even numbers from the array
function filterEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}
  
