# Train your skill in following the flow of control while understanding the concept of callbacks

## Workshop objectives

In this workshop, you'll aim to improve your ability to:

1. Describe the flow of control of a program as the order that pieces of the code are executed.
2. Explain how to follow the flow of control.
3. Follow the flow of control to help you write and debug a callback.

Is the purpose and subject of this workshop clear?

## Workshop structure

### Thumbs (1 min)

How confident are you in each of the three abilities above?

By the end of the workshop, your thumbs will hopefully be a few notches higher.

### Setup (5 mins)

* Get your laptop.

* Clone this repo to your computer.

* Open the `callbacks-workshop` directory.

* Open a new web browser window and drop `index.html` onto it.

* Open your browser developer console.  It should say `hello!`.

### Demo (15 mins)

* Look at this program:

```js
// alpha

document.addEventListener("click", function() {
  // bravo
});

// charlie
```

* I want to understand the program's flow of control.  That is, I want to understand the order that the pieces of code are executed.

* To prove my understanding, my goal is to make a list of all the comments in the program (alpha, bravo, charlie etc) through which the flow of control will pass.  I'll order the list to reflect the order that the pieces of code in the program are executed.

* To build my intuition, I make a guess at the list before I run the code.

* Then, I run the code and debug it to check and maybe correct my list of comments.

* Look at the program below.  I repeat the process of understanding the flow of control.

```js
// alpha

function runItForMe(functionToRun) {
  // bravo

  functionToRun();

  // charlie
};

// delta

runItForMe(function() {
  // echo
});

// foxtrot
```

### Thumbs (1 min)

How confident are you in each of the three abilities we started the workshop with?

### Workshop (30 mins)

* Mary start timer.

* Pair up.  Decide on a driver and navigator.  This will be a great opportunity to practice avoiding the breakdown of driver/navigator during  investigatory coding.

* Open `callbacks-workshop/index.js` in your code editor.

* Copy the [question 1](#question-1) code below into `index.js`.

* To run the code, refresh your browser.

* Follow the process outlined in the demo to understand the flow of control of the question code.

1. Before running the code, look at it and make a provisional list of comments (alpha, bravo, charlie etc) through which you think the flow of control will pass.

2. Introspect on the code to find out what pieces of code are run in what order: run the code, add print statements, use a debugger, whatever you like.

3. If you find your list of comments is wrong, update it.

4. Keep going until your list is correct.

* Swap driver and navigator and move onto question 2.

* Mary wander around to check how people are doing.

### Plenary (15 mins)

We'll come back together and talk about the questions we found interesting and any things that surprised us.

### Thumbs (1 min)

How confident are you in each of the three abilities we begain the workshop with?

### After the workshop

* A developer constantly thinks about the flow of their code.  Keep trying to improve your skill and intuition.

* To understand more about callbacks, and to get more practice following the flow of control, complete the questions you didn't have time to do in the workshop.

## Questions

### Question 1

```js
// alpha

[0, 1, 2, 3, 4].map(function() {
  // bravo
});

// charlie
```

### Question

```js
// alpha

document.addEventListener("click", function() {
  // bravo
});

// charlie

document.addEventListener("keydown", function() {
  // delta
});

// echo
```

### Question

```js
// alpha

setTimeout(function() {
  // bravo
}, 1000);

// charlie
```

### Question

```js
// alpha

setTimeout(function() {
  // bravo
}, 1000);

// charlie

setTimeout(function() {
  // delta
}, 1000);

// echo
```

### Question

```js
// alpha

setTimeout(function() {
  // bravo
}, Math.random() * 1000);

// charlie

setTimeout(function() {
  // delta
}, Math.random() * 1000);

// echo
```

### Question

```js
// alpha

function runItForMe(functionToRun) {
  // bravo

  functionToRun();

  // charlie
};

// delta

runItForMe(function() {
  // echo
});

// foxtrot
```

### Question

```js
function runItForMe(functionToRun) {
  functionToRun();
};

// delta

runItForMe(function(greeting) {
  // echo

  if (greeting !== "hello") {
    // foxtrot

    throw new Error("No hello?");

    // golf
  }

  // hotel
});

// irene
```

### Question

```js
// alpha

function fn1() {
  // bravo
};

// charlie

function fn2(inFn) {
  // delta

  fn1 = inFn;

  // echo
};

// foxtrot

fn2(function() {
  // golf
});

// hotel

fn1();

// irene
```

### Question

```js
// alpha

document.addEventListener("keyup", function(event) {
  // bravo

  var character = String.fromCharCode(event.keyCode);

  // charlie

  document.addEventListener("click", function() {
    // delta
  });

  // echo
});

// foxtrot
```

### Question

```js
// alpha

var request = new XMLHttpRequest();

// bravo

request.onreadystatechange = function() {
  // charlie
};

// delta

request.open("GET", "/");

// echo

request.send();

// foxtrot
```

// tracing data through callbacks?
// go into the problems that promises solve, or more talk about mechanics
// no intro to console.log until next workshop
// promises more about ......... make that the next skill
// Maybe move var tracing to callbacks workshop and then focus promises workshop on the job readiness or curriculum point of promises
