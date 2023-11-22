//turnary Operator syntax:con ? exprIfTrue : exprIfFalse;

let age = 10;
let v = age >= 18 ? "You are elligible" : "Not elligible";

console.log(v);

let b = 12;
let message;
if (b > 5) {
  message = "go to school";
} else if (b > 25) {
  message = "Do Job";
} else {
  message = "You are a kid ";
}

console.log(message);
