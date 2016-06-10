# Train your skill in following the flow of control while understanding the concept of callbacks

## Abilities that this workshop focuses on

In this workshop, you'll improve your ability to:

1. Describe "the flow of control of a program" as "the order in which pieces of code are executed".
2. Explain how to follow the flow of control.
3. Follow the flow of control to help you understand callbacks.

Is the purpose and subject of this workshop clear?

## Workshop (1 hour)

### Thumbs (1 min)

How confident are you in each of the three abilities above?

By the end of the workshop, your thumbs will hopefully be a few notches higher.

### Demo (10 mins)

#### Demo 1

* I want to understand a program's flow of control.

1. Before running the code, I add some `console.log`s.  I log `1` in the bit of code I think will get run first, I log `2` in the bit of code I think will get run second, and so on. For example:

```js
console.log(1);

$(document).click(function() {
  console.log(2);
});

console.log(3);
```

2. I run the code.  If the numbers don't get logged in order (1, 2, 3 etc), I examine the code and try to figure out why.  Once I understand, I update my `console.log`s to reflect the correct order.

* [Do demo of understanding the program's flow of control.]

```js
var greeting;

$(document).click(function() {
  console.log(greeting);
});

greeting = "Hi!";
```

#### Demo 2

* Look at the program below.  I want to understand its flow of control.

* [Do demo of understanding the program's flow of control.]

```js
var greeting;

function runItForMe(callback) {
  // add parens to invoke passed callback
  callback();
};

greeting = "Howdy";

runItForMe(function() {
  console.log(greeting);
});

greeting = "Heya";
```

### Thumbs (1 min)

How confident are you in each of the three abilities we talked about at the beginning of the workshop?

(Hopefully thumbs have gone up for first two items.  If not, maybe try diagramming?)

### Setup (5 mins)

Clone the repo to your computer, run `npm install` and open `callbacks-workshop/index.html` in your web browser.  It should say `hello!` in your browser developer console.  [More help](../run-the-question-code.md).

### Workshop (30 mins)

* Pair up.  Choose who will drive and who will navigate.  This will be a great opportunity to practice maintaining the driver/navigator roles during investigatory coding.  Remember the XP values of communication, feedback, respect, courage and simplicity.

* Put the code for question 1 (below) into `callbacks-workshop/index.js`.  Open `index.html` in your browser.  [More help](../run-the-question-code.md).

* Follow the process outlined in the demo to understand the flow of control of the code in the questions.

* Swap driver and navigator and move onto question 2.

### Plenary (15 mins)

We'll come back together and talk about the questions we found interesting and any things that surprised us.

### Thumbs (1 min)

How confident are you in each of the three abilities we began the workshop with?

### After the workshop

* A developer constantly analyses the flow of control of their code.  Keep trying to improve this skill.

* The more adept you are at reading the flow of control without running the code, the faster you'll be.  Build this intuition by making predictions and checking if your prediction is right.

* To understand more about callbacks, and to get more practice following the flow of control, complete the questions you didn't have time to do in the workshop.

## Questions

Follow the process for understanding the flow of control that we used in the demo.

For each question, the goal is to have `console.log`s in each part of the code, and for them to print numbers in order: 1, 2, 3 etc.

### Question 1

Terminology: synchronous code.

```js
var greetings = ["hi", "howdy", "hey"];

greetings.forEach(function(greeting) {
  console.log(greeting);
});
```

### Question 2

Terminology: synchronous code.

```js
var numbers = [0, 1, 2, 3, 4];

function square(number) {
  return number * number;
};

var squares = numbers.map(square);

console.log(squares);
```

### Question 3

Terminology: synchronous code.

```js
function exclaim(greeting) {
  return greeting + "!";
};

var greetings = ["hi", "howdy", "hey"];

var exclaimedGreetings = greetings.map(exclaim);

console.log(exclaimedGreetings);
```

### Question 4

Terminology: event listener, document object model (DOM).

```js
var keyCode;

$(document).click(function() {
  console.log(keyCode);
});

$(document).keydown(function(event) {
  keyCode = event.keyCode;
});

keyCode = 999999999;
```

### Question 5

Terminology: event loop.

```js
var greeting;

setTimeout(function() {
  console.log(greeting);
}, 1000);

greeting = "Yo";
```

### Question 6

Terminology: event loop.

```js
var greeting = "Hey";

setTimeout(function() {
  greeting = "Who are you?";
}, Math.random() * 1000);

setTimeout(function() {
  console.log(greeting);
}, Math.random() * 1000);
```

### Question 7

Can you change this code so it doesn't throw an error?

Terminology: callback arguments.

```js
function runItForMe(callback) {
  callback();
};

runItForMe(function(greeting) {
  if (greeting !== "hello") {
    throw new Error("No hello?");
  }
});
```

### Question 8

Write code that will `console.log` `alpha` after one second, `bravo` one second later and `charlie` one second after that.  Write the code so that increasing the delay before one `console.log` will, without changing any other code, increase the delay for the subsequent `console.log`s by the same amount. For example, if you change the code to print `alpha` after two seconds, `bravo` and `charlie` should automatically be delayed by that extra second, too.

## Resources

* [Callbacks tutorial](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
