# Train your skill in following the flow of control while understanding the concept of callbacks

## Workshop objectives

In this workshop, you'll aim to improve your ability to:

1. Describe "the flow of control of a program" as "the order in which the pieces of code are executed".
2. Explain how to follow the flow of control.
3. Follow the flow of control to help you write and debug a callback.

Is the purpose and subject of this workshop clear?

## Workshop structure

### Thumbs (1 min)

How confident are you in each of the three abilities above?

By the end of the workshop, your thumbs will hopefully be a few notches higher.

### Setup (5 mins)

Clone the repo to your computer, open `callbacks-workshop/index.html` in your web browser.  It should say `hello!` in your browser developer console.  [More help](run-the-questions.md).

### Demo (15 mins)

* Look at this program.  I want to understand its flow of control.  See the [Process for understanding the flow of control](#process-for-understanding-the-flow-of-control)

* [Demo of understanding the program's flow of control.]

```js
var greeting;

document.addEventListener("click", function() {
  console.log(greeting);
});

greeting = "Hi!";
```

* Look at the program below.  I want to understand its flow of control.

* [Demo of understanding the program's flow of control]

```js
var greeting;

function runItForMe(functionToRun) {
  // add parens to invoke passed functionToRun
  functionToRun();
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

### Workshop (30 mins)

* Pair up.  Choose who will drive and who will navigate.  This will be a great opportunity to practice avoiding the breakdown of driver/navigator during  investigatory coding.  Remember the XP Values of communication, feedback, respect and courage.

* Put the code for question 1 (below) into `callbacks-workshop/index.js`.  Open `index.html` in your browser.  [More help](run-the-questions.md).

* Follow the process outlined in the demo to understand the flow of control of the question code.

* Swap driver and navigator and move onto question 2.

### Plenary (15 mins)

We'll come back together and talk about the questions we found interesting and any things that surprised us.

### Thumbs (1 min)

How confident are you in each of the three abilities we began the workshop with?

### Process for understanding the flow of control

1. Before running the code, make a provisional list of the lines or part-lines of code you think will get run in the order they will get run.

2. Introspect on the code to find out if your list is correct: run the code, add print statements, use a debugger, whatever you like.

3. If you find your list is wrong, update it.

### After the workshop

* A developer constantly thinks about the flow of their code.  Keep trying to improve this skill and intuition.

* To understand more about callbacks, and to get more practice following the flow of control, complete the questions you didn't have time to do in the workshop.

## Questions

### Question 1

Terminology: synchronous.

```js
var numbers = [0, 1, 2, 3, 4];

var squares = numbers.map(function(number) {
  return number * number;
});

console.log(squares);
```

### Question 2

Terminology: event listener, document object model.

```js
var keyCode;

document.addEventListener("click", function() {
  console.log(keyCode);
});

document.addEventListener("keydown", function(event) {
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

function runItForMe(functionToRun) {
  functionToRun();
};

runItForMe(function(greeting) {
  if (greeting !== "hello") {
    throw new Error("No hello?");
  }
});
```

### Question 6

Terminology: closures, closed over variables, mutable state.

```js
var greeting = "What's happening?";

function fn1() {
  console.log(greeting);
};

function fn2(inFn) {
  fn1 = inFn;
};

fn2(function() {
  console.log("Alright?");
});

fn1();
```
