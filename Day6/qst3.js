//Methods in String
let message = " Hello, World! ";

console.log(message.length); // Length of the string

console.log(message.toUpperCase()); // Convert to uppercase

console.log(message.toLowerCase()); // Convert to lowercase

console.log(message.substring(0, 5)); // Extract a substring

console.log(message.indexOf("World")); // Find the index of a substring

console.log(message.replace("World", "beautiful")); // Replace part of a string

let trimmedMessage = message.trim(); // Trim whitespaces from both ends
console.log(trimmedMessage);

let splitMessage = message.split(","); // Split the string into an array using ','
console.log(splitMessage);

let charAtIndex7 = message.charAt(8); //// Get the character at index 4
console.log(charAtIndex7);
