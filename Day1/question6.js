var a = "Global variable (var)";

if (true) {
  var b = "I am  var with block scope";
  console.log(" Inside Block scope (var):", b);
}

console.log("Outside Block scope (var):", b); // 'b' is accessible outside the block

console.log(a); //Global scope can accessible both inside and outside

if (true) {
  let name = "I am  let with block scope";
  console.log("Inside Block (let):", name); //block scope can't accessible both inside and outside
}

// console.log("Outside Block (let):", name);
