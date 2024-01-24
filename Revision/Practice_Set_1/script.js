function helloPara() {
  let newPara = document.createElement("p");

  newPara.textContent = "Hello DOM Welcome Paragraph";
  document.body.appendChild(newPara);
}
helloPara();
