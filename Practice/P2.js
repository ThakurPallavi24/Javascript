//Another loops examples:

//For in Loop: The for in loop iterates over the properties of an object.
let student = {
  S_name: "Pallavi",
  S_age: 25,
  S_job: "Developer",
};

for (let key in student) {
  console.log(key, student[key]);
}

//For of Loop: The for of loop interates over the properties of array and string.

let a = ["a", "b", "c", "d", "e"];

for (let b of a) {
  console.log(b);
}
