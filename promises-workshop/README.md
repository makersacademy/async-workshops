# Train your skill in following the flow of data while understanding the concept of promises

## The flow of control and the flow of data

In this workshop, you'll build on the skills you learnt in the [flow of control (callbacks) workshop](../callbacks-workshop/).  Following the flow of data supports and is supported by following the flow of control.

## Why promises

* More powerful function and error composition in asynchronous code.  (Research topic!)

* Clarify "callback hell" by replacing it with straight-line code.  For example, look at this nice code that uses promises:

```js
getPeople()
  .then(first)
  .then(extractId)
  .then(getPerson)
  .then(extractFavouriteMusic)
  .then(cheerForFavouriteMusic);
```

> Later in the workshop, you'll write your own version of this code that uses callbacks to experience the hell for yourself.

## Abilities that this workshop focuses on

This workshop won't cover why promises are useful.  It will cover how they work.

In this workshop you'll improve your ability to:

1. Describe "the data flow of a program" as "the way that data moves through a program".
2. Explain how to follow the flow of data through a program.
3. Follow the flow of data to help you understand promises.

Is the purpose and subject of this workshop clear?

### Process for understanding the flow of data

This process layers on top of the process for understanding the flow of control.  See the [callbacks worksheet](../callbacks-workshop/README.md) for a reminder.

1. First, I follow the flow of control to understand what parts of my code will get run when.

2. I imagine running my code.  I make a provisional list of the values that I think variables will have and the values that will be returned by functions.

3. I `console.log` variables and function return values to see their data.  I use more `console.log`s to follow this data as it flows on through the rest of my program.  I use this information to correct my provisional list.

## Workshop (1 hour)

### Thumbs (1 min)

How confident are you in each of the three abilities above?

By the end of the workshop, your thumbs will hopefully be a few notches higher.

### Demo (15 mins)

#### Demo 1: print some people's data

##### With a callback

What does this code do?

```js
$.get("https://async-workshops-api.herokuapp.com/people", function(people) {
  console.log(people);
});
```

###### With a promise

I'll demo understanding this program's flow of data.

Things I could `console.log` to get a better understanding of the flow of data:

* The return value of `get`.
* The return value of `then`.

```js
$.get("https://async-workshops-api.herokuapp.com/people")
  .then(function(people) {
    console.log(people);
  });
```

#### Demo 2: print a person's favourite music

##### With callbacks

I'll demo understanding this program's flow of data.

```js
$.get("https://async-workshops-api.herokuapp.com/people", function(people) {
  $.get("https://async-workshops-api.herokuapp.com/people/" + people[0].id, function(person) {
    console.log(person.favouriteMusic);
  });
});
```

##### With promises

I'll demo understanding this program's flow of data.

```js
$.get("https://async-workshops-api.herokuapp.com/people")
  .then(function(people) {
    return $.get("https://async-workshops-api.herokuapp.com/people/" + people[0].id);
  })
  .then(function(person) {
    console.log(person.favouriteMusic);
  });
```

> Notice how, unlike the callback version, this code can be read sequentially, top to bottom.

### Thumbs (1 min)

How confident are you in each of the three abilities we talked about at the beginning of the workshop?

(Hopefully thumbs have gone up for first two items.  If not, maybe try diagramming?)

### Setup (5 mins)

Clone the repo to your computer, run `npm install` and open `promises-workshop/index.html` in your web browser.  It should say `hi!` in your browser developer console.  [More help](../run-the-question-code.md).

### Workshop (30 mins)

* Pair up.  Choose who will drive and who will navigate.  This will be a great opportunity to practice maintaining the driver/navigator roles during investigatory coding.  Remember the XP values of communication, feedback, respect, courage and simplicity.

* Put the code for question 1 (below) into `promises-workshop/index.js`.  Open `index.html` in your browser.  [More help](../run-the-question-code.md).

* Follow the process outlined in the demo to understand the flow of control of the code in the questions.

* Swap driver and navigator and move onto question 2.

### Plenary (15 mins)

We'll come back together, show and analyse our code, and answer questions.

### Thumbs (1 min)

How confident are you in each of the three abilities we began the workshop with?

### After the workshop

* A developer constantly analyses the flow of data in their code.  Keep trying to improve this skill.

* The more you can correctly read the flow of data without running the code, the faster you'll be.  Build this intuition by making predictions and checking if your prediction is right.

* To understand more about promises, and to get more practice following the flow of data, complete the questions you didn't have time to do in the workshop.

## Questions

### Question 1

Look at this code and predict what it will print.

Run the code.  Was your prediction correct? Investigate the flow of control and use what you learn to correct your prediction.

```js
console.log("howdy");

$.get("https://async-workshops-api.herokuapp.com/people")
  .then(function(people) {
    console.log(people);
  });

console.log("hello");
```

### Question 2

This code is broken.  It should print `Sunset Rubdown`, but it doesn't.

Investigate the flow of control and use what you learn to fix the code.

```js
$.get("https://async-workshops-api.herokuapp.com/people")
  .then(function(people) {
    $.get("https://async-workshops-api.herokuapp.com/people/" + people[0].id);
  })
  .when(function(person) {
    console.log(person.favouriteMusic);
  });
```

### Question 3

Look at this code and predict what it will print.

Run the code.  Was your prediction correct? Investigate the flow of control and use what you learn to correct your prediction.

Run the code twenty times.  Does it produce the same result every time? Does this make the code more or less simple?

```js
$.get("https://async-workshops-api.herokuapp.com/people")
  .then(function(people) {
    $.get("https://async-workshops-api.herokuapp.com/people/" + people[0].id)
      .then(function(person) {
        console.log(person.favouriteMusic);
      });

    $.get("https://async-workshops-api.herokuapp.com/people/" + people[1].id)
      .then(function(person) {
        console.log(person.favouriteMusic);
      });
  });
```

### Question 4

Write a program that prints Mary's favourite music and then prints her musical kindred spirit's favourite music.

Is your code shaped like an arrow or a stack of bricks? Which would be better? Why?

## Resources

* [Promises (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* :pill: [Promises](https://github.com/makersacademy/course/blob/master/pills/js_promises.md)
