//alert(),prompt(),confirm

alert("Welcome"); //Used to displays a dialog box with a message and an "OK" button.

let name = prompt("Enter your name", "name"); //Used to take user input in the form of text.

let result = confirm("Do you want to proceed?"); //Used to display a dialog box with two buttons: "OK" and "Cancel"

if (result === true) {
  alert("You clicked OK!");
} else {
  alert("You clicked Cancel!");
}
