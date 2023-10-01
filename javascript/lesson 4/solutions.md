**Solution 1**

```js
function sumArray(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    return sum;
}
```

**Solution 2**

```js
function stringLengths(strings) {
    let lengths = [];
    strings.forEach(function(string) {
        lengths.push(string.length);
    });
    return lengths;
}
```

**Solution 3**

```js
function objectValues(objects, property) {
    let values = [];
    objects.forEach(function(object) {
        values.push(object[property]);
    });
    return values;
}
```

**Solution 4**

```js
function findLargest(numbers) {
    let largest = Number.NEGATIVE_INFINITY;
    numbers.forEach(function(number) {
        if (number > largest) {
            largest = number;
        }
    });
    return largest;
}
```

**Solution 5**

```js
function filterObjects(objects, property, value) {
    let filtered = [];
    objects.forEach(function(object) {
        if (object[property] === value) {
            filtered.push(object);
        }
    });
    return filtered;
}
```
**Solution 6**

```js
function squareArray(numbers) {
    return numbers.map(function(number) {
        return number * number;
    });
}
```

**Solution 7**

```js
function firstLetters(strings) {
    return strings.map(function(string) {
        return string[0];
    });
}
```

**Solution 8**

```js
function objectValues(objects, property) {
    return objects.map(function(object) {
        return object[property];
    });
}
```

**Solution 9**

```js
function absoluteValues(numbers) {
    return numbers.map(function(number) {
        return Math.abs(number);
    });
}
```

**Solution 10**

```js
function addNumber(numbers, numberToAdd) {
    return numbers.map(function(number) {
        return number + numberToAdd;
    });
}
```

**Solution 11**

```js
function evenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}
// test case 
console.log(evenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(evenNumbers([-4, -2, 0, 2, 4])); // Output: [-4, -2, 0, 2, 4]
```

**Solution 12**

```js
function longStrings(strings) {
    return strings.filter(function(string) {
        return string.length > 5;
    });
}
// test case 
console.log(longStrings(["apple","banana","cherry"])); // Output: ["banana","cherry"]
console.log(longStrings(["abc","defghi","jklmn"])); // Output: ["defghi"]
```

**Solution 13**

```js
function filterObjects(objects, property, value) {
    return objects.filter(function(object) {
        return object[property] === value;
    });
}
// test case 
let objects = [{name: "John", age: 30}, {name: "Bob", age: 25}, {name: "Steve", age: 35}];
console.log(filterObjects(objects,'age',25)); // Output: [{name: "Bob", age: 25}]
console.log(filterObjects(objects,'name','Steve')); // Output: [{name: "Steve", age: 35}]
```

**Solution 14**

```js
function positiveNumbers(numbers) {
    return numbers.filter(function(number) {
        return number > 0;
    });
}
// test case
console.log(positiveNumbers([-1, 0, 1, 2])); // Output: [1, 2]
console.log(positiveNumbers([-1.5, -2.5, 3.5, 4.5])); // Output: [3.5, 4.5]
```

**Solution 15**

```js
function stringsStartWith(strings, letter) {
    return strings.filter(function(string) {
        return string[0] === letter;
    });
}
// test case
console.log(stringsStartWith(["apple","banana","cherry"],'a')); // Output: ["apple"]
console.log(stringsStartWith(["apple","banana","cherry"],'b')); // Output: ["banana"]
```

**Solution 16**

```js
function findEmployeeByName(data, name) {
    return data.employees.find(function(employee) {
        return employee.name === name;
    });
}
console.log(findEmployeeByName(data, "Bob"))
```

**Solution 17**

```js
function findEmployeeByPosition(data, position) {
    return data.employees.find(function(employee) {
        return employee.position === position;
    });
}
console.log(findEmployeeByPosition(data, "Developer"))
```

**Solution 18**

```js
function findProjectByName(data, name) {
    return data.projects.find(function(project) {
        return project.name === name;
    });
}
console.log(findProjectByName(data, "Project B"))
```

**Solution 19**

```js
function findProjectByDeadline(data, deadline) {
    return data.projects.find(function(project) {
        return project.deadline === deadline;
    });
}
console.log(findProjectByDeadline(data, "01/01/2022"))
```

**Solution 20**

```js
function findProjectByManager(data, manager) {
    return data.projects.find(function(project) {
        return project.manager === manager;
    });
}
console.log(findProjectByManager(data, "Jane"))
```
**Solution 21**

```js
function concatenate(strings) {
    return strings.reduce(function(concat, string) {
        return concat + string;
    }, "");
}
console.log(concatenate(["Hello", " ", "world", "!"]));  // Output: "Hello world!"
```

**Solution 22**

```js
function product(numbers) {
    return numbers.reduce(function(product, number) {
        return product * number;
    }, 1);
}
console.log(product([1, 2, 3, 4, 5]));  // Output: 120
```

**Solution 23**

```js
function findAverage(numbers) {
    return numbers.reduce(function(total, number) {
        return total + number;
    }) / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));  // Output: 3
```

**Solution 24**

```js
function findLongestString(strings) {
    return strings.reduce(function(longest, string) {
        return string.length > longest.length ? string : longest;
    });
}
console.log(findLongestString(["Hello", "world", "this", "is", "a","long","sentence"]));  // Output: "sentence"
```

**Solution 25**

```js
function extractValues(objects, property) {
    return objects.reduce(function(values, object) {
        values.push(object[property]);
        return values;
    }, []);
}
console.log(extractValues([{name: "John", age: 30}, {name: "Bob", age: 25}, {name: "Steve", age: 35}], "age"));  // Output: [30, 25, 35]
```



