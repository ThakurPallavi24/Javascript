//WAP that takes a string and prints out the number of vowels in the string.
function vowelC(str) {
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(vowelC("Pallavi"));
