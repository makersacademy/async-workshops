function after(delay) {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
};

after(1000)
  .then(function() {
    console.log("Surprise!");
  })
