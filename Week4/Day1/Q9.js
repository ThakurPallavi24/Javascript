//Write a function called 'sumOddNumbers' that takes an array of numbers as a parameter and returns the sum of all odd numbers in the array.

function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      sum += n[i];
    }
  }
  return sum;
}
const a = [3, 5, 4, 2, 1];
console.log(sumOddNumbers(a));
