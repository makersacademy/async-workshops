// 1. Describe what control flow is.
// 2. Explain how to follow the flow of control.
// 3. Follow the flow of control to help you write and debug a callback.

// ================================================================

// alpha

document.addEventListener("click", function() {
  // bravo
});

// charlie

// ================================================================

// alpha

[0, 1, 2, 3, 4].map(function() {
  // bravo
});

// charlie

// ================================================================

// alpha

document.addEventListener("click", function() {
  // bravo
});

// charlie

document.addEventListener("keydown", function() {
  // delta
});

// echo

// ================================================================

// alpha

setTimeout(function() {
  // bravo
}, 1000);

// charlie

// ================================================================

// alpha

setTimeout(function() {
  // bravo
}, Math.random() * 1000);

// charlie

setTimeout(function() {
  // delta
}, Math.random() * 1000);

// echo

// ================================================================

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

// ================================================================

function runItForMe(functionToRun) {
  functionToRun();
};

// delta

runItForMe(function(greeting) {
  // echo

  if (greeting !== "hello") {
    // foxtrot

    // throw new Error("No hello?");

    // golf
  }

  // hotel
});

// irene

// ================================================================

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

// ================================================================

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

// ================================================================

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


// tracing data through callbacks?
// go into the problems that promises solve, or more talk about mechanics
// no intro to console.log until next workshop
// promises more about ......... make that the next skill
// Maybe move var tracing to callbacks workshop and then focus promises workshop on the job readiness or curriculum point of promises
