let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

//Use the push method to add two more elements to the end of the array.
arr.push(7, 8);

for (let i = 0; i < 8; i++) {
  console.log(`The array of ${i} element is : `, arr[i]);
}

//Use the pop method to remove the last element from the array.
arr.pop();

console.log(arr);

//Use the unshift method to add a new element to the beginning of the array.
arr.unshift(0);

console.log(arr);

//Use the shift method to remove the first element from the array.
arr.shift();

console.log(arr);
