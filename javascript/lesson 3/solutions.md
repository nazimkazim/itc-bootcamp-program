***Chellange 1***:
```js
const divElement = document.createElement('div');
const spanElement = document.createElement('span');
const imgElement = document.createElement('img');
```

***Chellange 2***:
```js
spanElement.textContent = 'Hello World';
```

***Chellange 3***:
```js
<div class="container"></div>

<script>
  const spanElement = document.createElement('span');
  const containerElement = document.querySelector('.container');
  containerElement.appendChild(spanElement);
</script>
```

***Chellange 4***:
```js
containerElement.style.width = '100px';
containerElement.style.height = '100px';
containerElement.style.backgroundColor = 'red';
```

***Chellange 5***:
```js
containerElement.setAttribute('style', 'width: 100px; height: 100px; background-color: red;');
```

***Chellange 6***:
```js
<div class="container"></div>

<style>
  .box {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width: 300px;
    height:300px;
    background-color:lightblue;
  }
</style>

<script>
  const imgElement = document.createElement('img');
  imgElement.src = 'https://example.com/image.jpg';
  const containerElement = document.querySelector('.container');
  containerElement.appendChild(imgElement);
  containerElement.classList.add('box');
</script>
```

***Chellange 7***:
```js
const colors = ['red', 'green', 'blue'];
console.log(colors);
```

***Chellange 8***:
```js
colors.push('yellow', 'pink');
```

***Chellange 9***:
```js
colors.pop();
colors.pop();
colors.pop();
```
***Chellange 10***:
```js
colors.unshift('purple');
```
***Chellange 11***:
```js
colors.shift();
```
***Chellange 12***:
```js
colors.indexOf('green');
```

***Chellange 13***:
```js
const person = {
  name: 'John',
  age : 30,
  city: 'New York',
  country: 'USA',
  isMarried: false
}
```

***Chellange 14***:
```js
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person['name']);
console.log(person['age']);
console.log(person['city']);
```

***Chellange 15***:
```js
person.job = 'developer';
person['company'] = 'Google';
```

***Chellange 16***:
```js
const names = ['John', 'Jane', 'Mary'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

***Chellange 17***:
```js
// array of objects
const people = [
  {
    name: 'John',
    age : 30,
    city: 'New York',
    country: 'USA',
    isMarried: false
  },
  {
    name: 'Jane',
    age : 25,
    city: 'London',
    country: 'UK',
    isMarried: true
  },
  {
    name: 'Mary',
    age : 28,
    city: 'Paris',
    country: 'France',
    isMarried: true
  }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
```