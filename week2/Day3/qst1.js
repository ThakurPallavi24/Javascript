//Function is a block of which is executed when it is called.

//function declaration
function add(a, b) {
  return a + b;
}
var result = add(5, 8);
console.log(result);

//function expression
let exp = function multyply(x, y) {
  return x * y;
};

let multy = exp(7, 12);
console.log(multy);

//Arrow function
const sub = (c, d) => c - d;
const resultA = sub(19, 7);
console.log(resultA);

//Arrow function
const subtract = (a, b) => {
  return a - b;
};

let result2 = subtract(8, 5);
console.log(result2);
