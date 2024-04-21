//Write a program that displays a string in reverse order.
let a = "Javascript";
console.log("Original string is : ", a);

function revOfa(b) {
  let rev = b.split("").reverse().join("");

  return rev;
}
console.log("Reverse string is :", revOfa(a));
