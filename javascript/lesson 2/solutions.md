***Challenge 1 solution***: 
```js
alert("You are the best!");
```

***Challenge 2 solution***: 
```js
const printName = function() {
  console.log("My name is Nazim");
}

printName();
printName();
printName();
printName();
printName();    
```

***Challenge 3 solution***: 
```js
function printAPerson(name) {
  console.log(`My name is ${name}`);
}

printAPerson('Smith');
printAPerson('Tom');
printAPerson('Brad');
printAPerson('Sarah');
printAPerson('Fil');
```

***Challenge 4 solution***: 
```js
const greetAPersonWithAge = function(name, age) {
  console.log(`Hi, my name is ${name} and I am ${age} years old`);
}

greetAPersonWithAge('Smith', 20);
greetAPersonWithAge('Tom', 30);
greetAPersonWithAge('Brad', 45);
greetAPersonWithAge('Sarah', 17);
greetAPersonWithAge('Fil', 35);
```

***Challenge 5 solution***: 
```js
function greetAPersonWithAgeAndGender(name, age, gender) {
  return `Hello Mr. ${name}, you are ${age} years old. I am ${gender}`;
}

const greeting1 = greetAPersonWithAgeAndGender('Smith', 20, 'male');
console.log(greeting1);

const greeting2 = greetAPersonWithAgeAndGender('Tom', 30, 'male');
console.log(greeting2);

const greeting3 = greetAPersonWithAgeAndGender('Brad', 45, 'male');
console.log(greeting3);

const greeting4 = greetAPersonWithAgeAndGender('Sarah', 17, 'female');
console.log(greeting4);

const greeting5 = greetAPersonWithAgeAndGender('Fil', 35, 'male');
console.log(greeting5);
```

***Challenge 6 solution***: 
```js
const determineShape = function(numOfAngles) {
  if (numOfAngles === 3) {
    return "The shape is a triangle";
  } else if (numOfAngles === 4) {
    return "The shape is a square";
  } else if (numOfAngles === 5) {
    return "The shape is a pentagon";
  } else if (numOfAngles === 6) {
    return "The shape is a hexagon";
  } else if (numOfAngles === 7) {
    return "The shape is a heptagon";
  } else {
    return "I'm sorry, I don't recognize that shape.";
  }
};

determineShape(3);
console.log(determineShape);
```

***Challenge 7 solution***: 
```js
const calculateArea = (length, width) => {
  return length * width;
};

const area1 = calculateArea(3, 4);
console.log(`The area is ${area1}`);
```

***Challenge 8 solution***: 
```js
for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
```

***Challenge 9 solution***: 
```js
function printANumberMultipliedBy10(number) {
  console.log(`This is a number ${number} multiplied by 10`);
}

for (let i = 1; i <= 5; i++) {
  printANumberMultipliedBy10(i * 10);
}
```

***Challenge 10 solution***: 
```js
for (let i = 100; i > 50; i--) {
    console.log(i);
}
```

***Challenge 11 solution***: 
```js
function printEvenNumbers(n) {
  // Iterate through the range from 0 to the input number
  for (let i = 0; i <= n; i++) {
    // Check if the current iteration variable is even
    if (i % 2 === 0) {
      // If it is even, print it
      console.log(i);
    }
  }
}

// Call the function with an input number
printEvenNumbers(10);

```

***Challenge 12 solution***: 
```js
function countTotal(num) {
  // Initialize a variable to store the total
  let total = 0;

  // Iterate from 1 to the number
  for (let i = 1; i <= num; i++) {
    // Add the current number to the total
    total += i;
  }

  // Return the total
  return total;
}

// Test the function
console.log(countTotal(5)); // 15 (1 + 2 + 3 + 4 + 5)
console.log(countTotal(10)); // 55 (1 + 2 + 3 + ... + 10)
```

***Challenge 13 solution***: 
```js
function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      reversedString += str[i].toUpperCase();
    } else {
      reversedString += str[i];
    }
  }
  return reversedString;
}

// Example usage
let originalString = "Hello world!";
let reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!DlRoW OlLeH"
```

***Challenge 14 solution***:
```js
function createString(num, str) {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

// Example usage
console.log(createString(5, "hello ")); // Output: "hello hello hello hello hello "
console.log(createString(3, "world!")); // Output: "world!world!world!"
```

***Challenge 15 solution***: 
```js
function replaceCharacter(str, index, char) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (i === index) {
      newString += char;
    } else {
      newString += str[i];
    }
  }
  return newString;
}

// Example usage
console.log(replaceCharacter("Hello world!", 5, "x")); // Output: "Hexlo world!"
console.log(replaceCharacter("Foo bar", 0, "B")); // Output: "Boo bar"
```

***Challenge 16 solution***: 
```js
function example(param1, param2) {
  let result = "";
  for (let i = 0; i < param1.length; i++) {
    if (param1.charAt(i) === param2) {
      result += param1.charAt(i).toUpperCase();
    } else {
      result += param1.charAt(i);
    }
  }
  return result;
}

// Example usage
console.log(example("Hello world!", "l")); // Output: "HeLLo worLd!"
console.log(example("Foo bar", "o")); // Output: "FOO bar"
```

***Challenge 17 solution***: 
```js
function replaceCharacters(str, char1, char2) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char1) {
      newString += char2;
    } else {
      newString += str.charAt(i);
    }
  }
  return newString;
}

// Example usage
console.log(replaceCharacters("Hello world!", "l", "x")); // Output: "Hexxo worxd!"
console.log(replaceCharacters("Foo bar", "o", "a")); // Output: "Faa bar"
```

***Challenge 18 solution***: 
```js
function removeFirstThreeCharacters(sentence) {
  return sentence.slice(3);
}
```



