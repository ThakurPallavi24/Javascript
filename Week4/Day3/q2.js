//Rest parameter allows a function to accept an idefinite number of arguments as an array.
function multy(...a) {
  let result = 1;
  for (let i = 0; i < a.length; i++) {
    result *= a[i];
  }
  console.log(result);
}
multy(3, 4, 6);
