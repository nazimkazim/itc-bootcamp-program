/* 
A function is a block of reusable code written to perform a specific task. You can think of a function as a sub-program within the main program. A function consists of a set of statements but executes as a single unit. In JavaScript, we have some browser built-in functions like alert(), prompt(), and confirm()
*/

1. // Function declaration
function greet() {
    console.log('Hello World');
}

// call the function
greet();

// Challange 1
// ========================

2. // Function expression
const speak = function() {
    console.log('Good day');
}

// call the function
speak();

// Challange 2
// ========================

/*
Function can also take arguments. Arguments are the values passed to the function when it is called. The function can use the arguments to perform a task. Arguments are passed to the function in the order they are defined in the function.
*/

3. // Function with arguments
const greetAPerson = function(name) {
    console.log(`Hello ${name}`);
}

// call the function
greetAPerson('John');

// Challange 3
// ========================

4. // Function with multiple arguments
const greetAPersonWithAge = function(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}

// call the function
greetAPersonWithAge('John', 30);

// Challange 4
// ========================

5. // Function with return statement
const calcArea = function(radius) {
    return 3.14 * radius**2;
}   

// call the function
const area = calcArea(5);
console.log(area);

// Challange 5
// ========================

6. // Combine function with if statement
const calcAreaWithIf = function(radius) {
    if (radius < 0) {
        return 'Radius must be a positive number';
    }
    return 3.14 * radius**2;
}

// call the function
const areaWithIf = calcAreaWithIf(-5);
console.log(areaWithIf);

// Challange 6
// ========================

7. // Function with arrow function
const calcAreaWithArrow = (radius) => {
    return 3.14 * radius**2;
}

// call the function
const areaWithArrow = calcAreaWithArrow(5);

// Challange 7
// ========================

8. // Looping 
/*
When we want to do something multiple times, we can use a loop. 
There are three types of loops in JavaScript: for, while, and do while. 
The for loop is used when we know how many times we want to loop. 
The while loop is used when we don't know how many times we want to loop. 
The do while loop is used when we want to loop at least once.
*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Challange 8
// ========================

9. // Looping by calling a function that takes in an argument and console log the result
const printNumberWIthLoop = (number) => {
    console.log(`This is number ${number}`);
}

for (let i = 1; i <= 10; i++) {
    printNumberWIthLoop(i);
}

// Challange 9
// ========================

10. // Looping in reverse order 
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

// Challange 10
// ========================

11. // Demonstration of the moulo operator
console.log(5 % 2); // 1
console.log(6 % 2); // 0

// Challange 11
// ========================

12 // Define a function that takes a string as an argument and returns a new string with all vowels removed
// Demonstrate this example on the board

function removeVowels(str) {
    // Initialize an empty string to store the result
    let result = "";
  
    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a vowel
      if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
        // If it is not a vowel, add it to the result string
        result += str[i];
      }
    }
  
    // Return the result
    return result;
  }

removeVowels("hello"); // => "hll"

// Challange 12
// ========================

13. // Reverse a string using a for loop and the .length property of a string. 
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
  
// Example usage
let originalString = "Hello world!";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlrow olleH"

// Challange 13
// ========================
  
14. // Complete challenge 14

// Challange 14
// ========================

15. // Complete challenge 15

// Challange 15
// ========================

16. // Complete challenge 16

// Challange 16
// ========================

17. // Complete challenge 17

// Challange 17
// ========================

18. // Use slice methods to extract a portion of a string
let str = "Hello world!";
let slicedString = str.slice(0, 5);
console.log(slicedString); // Output: "Hello"

// Challange 18
// ========================

  