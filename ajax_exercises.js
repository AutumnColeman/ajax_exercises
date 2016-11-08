//CPS: 1
var num = 5;
function squareCPS(num, callback) {
  callback(num * num);
}
squareCPS(num, function(square) {
  console.log('The square is :', square);
});

//CPS 1.5
function square(num, callback) {
  callback(num * num);
}

function times2(num, callback) {
  callback (num * 2);
}

var num = 5;
square(num, function(result) {
  times2(result, function(squared){
    console.log('Result is:', squared);
  });
});

//CPS: 2
function square(num, callback) {
  callback(num * num);
}

function squareRoot(num, callback) {
  callback(Math.sqrt(num));
}

var x = 4;
var y = 3;

square(x, function(xSquared) {
  square(y, function(ySquared) {
    squareRoot(xSquared + ySquared, function(answer) {
      console.log('The answer is: ' + answer);
    });
  });
});
// var answer = squareRoot(xSquared + ySquared);
// console.log('The answer is: ' + answer);
