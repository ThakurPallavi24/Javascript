//Set : It can hold any value of any data type, whether primitive values or object references,no duplicate values
const mySet = new Set();
mySet.add("Apple");
mySet.add("Banana");
mySet.add("Orange");
mySet.add("Grapes");
console.log(mySet.has("Banana"));
mySet.delete("Orange");
console.log(mySet.size);
