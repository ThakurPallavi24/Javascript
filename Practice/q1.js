//Prompt the user to enter their fullname. Generate username for them based on the input.
//Start usename with @, followed their fullname and ending with the fullname length.

let fullname = prompt("Enter your fullname without spaces ");

let username = "@" + fullname + fullname.length;
console.log(username);
