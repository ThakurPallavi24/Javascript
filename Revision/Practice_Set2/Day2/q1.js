// Write a function called createStyledDiv that takes a color as a parameter.

function createStyledDiv(color) {
  let newDiv = document.createElement("div");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);

  let btn = document.createElement("button");
  btn.textContent = "Click me";
  btn.addEventListener("click", function () {
    alert("Inside the div button is clicked!");
  });

  newDiv.appendChild(btn);
}
createStyledDiv("orange");
