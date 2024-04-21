//Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function sumArrayNumbers(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
const numbers = [4, 2, 3, 2, 5];
console.log(sumArrayNumbers(numbers));
