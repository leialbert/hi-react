function createParagraph(params) {
  let para = document.createElement("p");
  para.textContent = "You clicked on this button";
  document.body.appendChild(para);
}
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
