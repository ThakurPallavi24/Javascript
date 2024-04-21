//Write a program that takes a number and prints the multiplication table for that number.
function Table(n) {
  for (let i = 1; i <= 10; i++) {
    result = n * i;
    console.log(`${n} X ${i} = ${result}`);
  }
}
Table(8);
