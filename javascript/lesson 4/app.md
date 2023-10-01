**1.Implementation with innerHTML**

```js
https://codepen.io/nazimkazim/pen/BaPdjWL

```

2. **Implement personell registration**

```js
1. create new codepen
2. create array of 5 sobjects
3. objects will contanis the following properties
   "name", "surname", "position", "start date", "department", "functions", "line manager", "photo"
4. implement functionality by design
5. Design https://app.diagrams.net/#G1k2BdcC2seZK71a27KJokFM7-k0h3acwK
6. Solution https://codepen.io/nazimkazim/pen/PoBKNoK
```

3. **Welcome to the array methods**
   **_We will be using the following array methods_**

```js
1. forEach
2. map
3. filter
4. find
5. reduce
6. some
7. every
8. sort
9. reverse
10. findIndex
11. includes
12. indexOf
14. concat
16. slice
17. splice
```

4. **forEach**

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
  console.log(number);
});
```

**Challenge1**

```js
Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array using the forEach() method.
```

**Challenge2**

```js
Write a function that takes an array of strings as a parameter and returns a new array containing the length of each string using the forEach() method.
```

**Challenge3**

```js
Write a function that takes an array of objects as a parameter and returns a new array containing the values of a specific property of each object using the forEach() method
```

**Challenge4**

```js
Write a function that takes an array of numbers as a parameter and returns the largest number in the array using the forEach() method
```

**Challenge5**

```js
Write a function that takes an array of objects as a parameter and returns a new array containing the objects that have a specific property value using the forEach() method
```

5. **map**

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);
```

**Challenge6**

```js
Write a function that takes an array of numbers as a parameter and returns a new array containing the square of each number using the map() method.

console.log(square([1,2,3,4])); // Output: [1, 4, 9, 16]
console.log(square([-1, 0, 1, 2])); // Output: [1, 0, 1, 4]
```

**Challenge7**

```js
Write a function that takes an array of strings as a parameter and returns a new array containing the first letter of each string using the map() method.

console.log(firstLetters(["apple","banana","cherry"])); // Output: ['a','b','c']
console.log(firstLetters(["","abc","  "])); // Output: ['','a',' ']
```

**Challenge8**

```js
Write a function that takes an array of objects as a parameter and returns a new array containing the values of a specific property of each object using the map() method.

console.log(objectValues(objects,'name')); // Output: ["John","Bob","Steve"]
console.log(objectValues(objects,'age')); // Output: [30,25,35]
```

**Challenge9**

```js
Write a function that takes an array of numbers as a parameter and returns a new array containing the absolute value of each number using the map() method.

console.log(absoluteValues([-1, 0, 1, 2])); // Output: [1, 0, 1, 2]
console.log(absoluteValues([-1.5, -2.5, 3.5, 4.5])); // Output: [1.5, 2.5, 3.5, 4.5]
```

**Challenge10**

```js
Write a function that takes an array of numbers as a parameter and returns a new array containing the result of adding a specific number to each number using the map() method.

console.log(addNumber([1,2,3,4], 10)); // Output: [11, 12, 13, 14]
console.log(addNumber([-1, 0, 1, 2], -5)); // Output: [-6, -5, -4, -3]
```

6. **filter**

```js
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
console.log(result);
```

**Challenge11**

```js
Write a function that takes an array of numbers as a parameter and returns a new array containing only the even numbers using the filter() method.
```

**Challenge12**

```js
Write a function that takes an array of strings as a parameter and returns a new array containing only the strings with more than 5 characters using the filter() method.
```

**Challenge13**

```js
Write a function that takes an array of objects as a parameter and returns a new array containing only the objects that have a specific property value using the filter() method.
```

**Challenge14**

```js
Write a function that takes an array of numbers as a parameter and returns a new array containing only the positive numbers using the filter() method.
```

**Challenge15**

```js
Write a function that takes an array of strings as a parameter and returns a new array containing only the strings that start with a specific letter using the filter() method.
```

7. **find**

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);
```

```js
const data = {
    employees: [
        { name: "John", age: 32, position: "Manager" },
        { name: "Jane", age: 28, position: "Developer" },
        { name: "Bob", age: 35, position: "Designer" },
        { name: "Steve", age: 40, position: "Developer" }
    ],
    projects: [
        { name: "Project A", deadline: "01/01/2022", manager: "John" },
        { name: "Project B", deadline: "01/02/2022", manager: "Jane" },
        { name: "Project C", deadline: "01/03/2022", manager: "Bob" }
    ]
}
```

**Challenge16**

```js
Write a function that takes the data object and a name as a parameter and returns the first employee object that has the same name.
```

**Challenge17**

```js
Write a function that takes the data object and a position as a parameter and returns the first employee object that has the same position.
```

**Challenge18**

```js
Write a function that takes the data object and a project name as a parameter and returns the first project object that has the same name.
```

**Challenge19**

```js
Write a function that takes the data object and a deadline as a parameter and returns the first project object that has the same deadline.
```

**Challenge20**

```js
Write a function that takes the data object and a manager's name as a parameter and returns the first project object that has the same manager's name.
```

**Reduce**

```js
function sum(numbers) {
    return numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0);
}
console.log(sum([1, 2, 3, 4, 5]));  // Output: 15
```

**Challenge21**

```js
Write a function that takes an array of strings and returns a single string that concatenates all the strings using the reduce() method.
```

**Challenge22**

```js
Write a function that takes an array of numbers and returns the product of all the numbers using the reduce() method.
```

**Challenge23**

```js
Write a function that takes an array of numbers and returns the average of all the numbers using the reduce() method.
```

**Challenge24**

```js
Write a function that takes an array of strings and returns the string with the longest length using the reduce() method.
```

**Challenge25**

```js
Write a function that takes an array of objects and returns an array of values for a specific property of all objects using the reduce() method.
```

**Some**

```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```
