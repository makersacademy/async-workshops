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

* Look at the program below.  I want to understand its flow of control.

1. Before running the code, I make a provisional list of the bits of code I think will get run in the order I think they will get run.

2. I run the code.  To get more information about the flow of control, I add lines like `console.log(1)` and `console.log(2)`.  I use what I learn to correct my list.

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

For each of these questions:

1. Before running the code, make a provisional list of the bits of code you think will get run in the order you think they will get run.  Do this on paper or in a text file.

2. Run the code.  To get more information about the flow of control, add lines like `console.log(1)` and `console.log(2)`.  Use what you learn to correct your list.

### Question 1

Terminology: synchronous code.

```js
var numbers = [0, 1, 2, 3, 4];

var squares = numbers.map(function(number) {
  return number * number;
});

console.log(squares);
```

### Question 2

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

### Question 3

Terminology: event loop.

```js
var greeting;

setTimeout(function() {
  console.log(greeting);
}, 1000);

greeting = "Yo";
```

### Question 4

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

### Question 5

Terminology: callback arguments.

```js
var greeting = "";

function runItForMe(callback) {
  callback();
};

runItForMe(function(greeting) {
  if (greeting !== "hello") {
    throw new Error("No hello?");
  }
});
```

### Question 6

Write code that will `console.log` `alpha` after one second, `bravo` one second later and `charlie` one second after that.

As an extra challenge, can you write your code so that increasing the delay before one `console.log` will, without changing any other code, increase the delay for the subsequent `console.log`s by the same amount? For example, if you change the code to print `alpha` after two seconds, `bravo` and `charlie` will be delayed by that extra second, too.

## Resources

* [Callbacks tutorial](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
