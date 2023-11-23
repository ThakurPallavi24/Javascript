//for in loop: iterates over the properties of an object.Each iteration returns a key, that is used to access the value of the key

let person = {
  name: "Pallavi",
  age: 25,
  occupation: "Developer",
};

for (let key in person) {
  console.log("this is person : ", person); // it will return properties of the object of person

  console.log("this is key value  : ", key); // it will return the variable or key name age occupation

  console.log(key + ": " + person[key]); //it will return the key with the key value
}

// Another fresh code

console.log("Here you can understand : ");
let student = {
  name: "John",
  age: 30,
  occupation: "Tester",
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
