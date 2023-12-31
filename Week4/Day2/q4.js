//Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.
function getLastCharacter(name) {
  let a = name[name.length - 1];
  return a;
}

console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
