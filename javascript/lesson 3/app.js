// 1. How to create an element in the DOM
const paragraphElement = document.createElement("p");

// Chellenge 1
// ========================

// 2. How to add text to an element
// Ask students which elements of the foollowing can have a text node as a child
// Answer: div and span

paragraphElement.textContent = "This is a paragraph";

// Chellenge 2
// ========================

// 3. How to add an element to the DOM
// Ask students whether they can add a text node to the DOM
// Answer: No, only elements can be added to the DOM
// Show how to add an element to the DOM
// For this we need to select the parent element
const body = document.querySelector("body");
body.appendChild(paragraphElement);

// Chellenge 3
// ========================

// 4. How to style an element
// Ask students how to style an element
// Answer: inline styles
// Show how to style an element using inline styles
paragraphElement.style.color = "red";

// Chellenge 4
// ========================

// 5. Alternative inline styles
paragraphElement.setAttribute("style", "color: blue");

// Chellenge 5
// ========================

// 6. How to add a class to an element
// Ask students how to add a class to an element
// Answer: using the class attribute
// Show how to add a class to an element using the class attribute
paragraphElement.classList.add("paragraph");

// Chellenge 6
// ========================

7; // let's imaging we have an online platform for buying and renting houses, and we want to create a list of products, each product the following properties:
// - name
// - price
// - type (buy or rent)
// - image
// - description
// - location
// - number of rooms

8; // Course of actions:
// 1. Create an element for each product
// 2. Add class to each product
// 3. Add text to each product
// 4. Append each product to the container

// Primitive implementation https://codepen.io/nazimkazim/pen/bGjgWQe

9; // Ask students if above implementation is scalable
// Answer: No, it is not scalable
// Ask students how to make it scalable
// Answer: using an array of objects

10; // Explain the concept of array of objects

/* An array is a collection of items that are stored in a single variable. Each item in an array is called an element, and each element has a numbered position called its index.

For example, you could create an array called "fruits" that contains the elements "apple", "banana", and "orange": */

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Outputs "apple"
console.log(fruits[1]); // Outputs "banana"
console.log(fruits[2]); // Outputs "orange"

/* Arrays are useful for storing and organizing data in a single place, and they can be used in many different ways in your programs. */

// Challenge 7
// ========================

11; // We can add items to an array using the push() method:
fruits = ["apple", "banana"];
fruits.push("orange");  // Now the array is ["apple", "banana", "orange"]

// Challenge 8
// ========================

12; // We can remove items from an array using the pop() method:
fruits = ["apple", "banana", "orange"];
fruits.pop();  // Now the array is ["apple", "banana"]

// Challenge 9
// ========================

13; // We can add items to the beginning of an array using the unshift() method:
fruits = ["apple", "banana", "orange"];
fruits.unshift("strawberry");  // Now the array is ["strawberry", "apple", "banana", "orange"]

// Challenge 10
// ========================

14; // We can remove items from the beginning of an array using the shift() method:
fruits = ["apple", "banana", "orange"];
fruits.shift();  // Now the array is ["banana", "orange"]

// Challenge 11
// ========================

15; // We can find the index of an item in an array using the indexOf() method:
fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana"));  // Outputs 1

// Challenge 12
// ========================

16; // Let's take a look at objects
// Why do we need objects?
// Objects are used to store keyed collections of various data and more complex entities. An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything.
const house = {
    // key: value
    houseName: "House 1",
    price: 100000,
    type: "buy",
    image: "https://images.unsplash.com/photo-1556740732-7c4d23d33b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    description: "This is a beautiful house",
    location: "Amman",
    rooms: 5
}

// Challenge 13
// ========================

17; // How to access the value of a key in an object?
// We can access the value of a key in an object using the dot notation
console.log(house.houseName); // Outputs "House 1"

// We can access the value of a key in an object using the bracket notation
console.log(house["houseName"]); // Outputs "House 1"

// Challenge 14
// ========================

18; // How to add a key to an object?
// We can add a key to an object using the dot notation
house.houseName = "House 2";
console.log(house.houseName); // Outputs "House 2"

// We can add a key to an object using the bracket notation
house["houseName"] = "House 3";
console.log(house["houseName"]); // Outputs "House 3"

// Challenge 15
// ========================

19; // Let's return to our array, we can also iterate through the array
// We can iterate through the array using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Challenge 16
// ========================

20; // We can iterate through the array of objects using for loop

const houses = [
    {
        houseName: "House 1",
        price: 100000,
        type: "buy",
        image: "https://images.unsplash.com/photo-1556740732-7c4d23d33b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "This is a beautiful house",
        location: "Amman",
        rooms: 5
    },
    {
        houseName: "House 2",
        price: 200000,
        type: "rent",
        image: "https://images.unsplash.com/photo-1556740732-7c4d23d33b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "This is a beautiful house",
        location: "Amman",
        rooms: 5
    },
    {
        houseName: "House 3",
        price: 300000,
        type: "buy",
        image: "https://images.unsplash.com/photo-1556740732-7c4d23d33b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "This is a beautiful house",
        location: "Amman",
        rooms: 5
    }
];

for (let i = 0; i < houses.length; i++) {
    console.log(houses[i].houseName);
    console.log(houses[i].price);
    console.log(houses[i].type);
    console.log(houses[i].image);
    console.log(houses[i].description);
    console.log(houses[i].location);
    console.log(houses[i].rooms);
}

// Challenge 17
// ========================




21; // Implementation with array of objects
// https://codepen.io/nazimkazim/pen/bGjgWQe
