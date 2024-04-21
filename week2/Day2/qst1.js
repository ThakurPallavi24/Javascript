//Map allows to store key value pairs.Map objects can hold both objects and primitive values as either key or value.
const myMap = new Map();

//set will set the properties
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

//By get we will get the properties
console.log(myMap.get("name"));
console.log(myMap.get("age"));
console.log(myMap.get("city"));

for (const [key, value] of myMap) {
  console.log(key, value);
}

//If properties are present it will return true else false
console.log(myMap.has("name"));
console.log(myMap.has("job"));

//for delete
myMap.delete("city");
console.log(myMap.get("city"));

console.log(myMap.size); //to check the size
