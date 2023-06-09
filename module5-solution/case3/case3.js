// Generate a large array of random numbers
let arraySize = 1000000;
let randomArray = Array.from({ length: arraySize }, () =>
  Math.floor(Math.random() * 100)
);

// Find the maximum value in the array
let max = Math.max(...randomArray);

// Find the minimum value in the array
let min = Math.min(...randomArray);

// Calculate the average of all numbers in the array
let sum = randomArray.reduce((acc, curr) => acc + curr, 0);
let average = sum / arraySize;

// Filter the array to get only even numbers
let evenNumbers = randomArray.filter((num) => num % 2 === 0);

// Check if all numbers in the array are positive
let allPositive = randomArray.every((num) => num > 0);

// Reverse the array
let reversedArray = randomArray.reverse();

// Sort the array in ascending order
let sortedArray = randomArray.sort((a, b) => a - b);

// Perform a map operation on the array to calculate the square of each number
let squaredArray = randomArray.map((num) => num * num);

// Perform a reduce operation on the array to calculate the sum of squares
let sumOfSquares = randomArray.reduce((acc, curr) => acc + curr * curr, 0);

// This is a large JavaScript file for testing or demonstration purposes

// Create an array of 1 million numbers
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
const ma = findMaxValue(array);
// console.log("Maximum value in the array: " + max);

// Filter even numbers from the array
const evenNumber = filterEvenNumbers(array);
// console.log("Even numbers in the array: " + evenNumbers.length);

// ... Add more code or functions as needed ...

// End of the bigScript.js file

function exe(){
  convertUpperCase(10);
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

const array = [];
for (let i = 0; i < 1000000; i++) {
  array.push(i);
}

// Calculate the sum of the array
const su = calculateSum(array);

// Function to find the sum of the array
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function case3(){
    console.log(myVariable);
}