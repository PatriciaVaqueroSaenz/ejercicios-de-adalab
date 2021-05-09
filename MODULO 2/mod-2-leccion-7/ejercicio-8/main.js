const buttons = document.querySelectorAll(".btn");
const doc = document.querySelector(".document");

function changeWindow() {
  doc.classList.toggle("red");
}

for (const button of buttons) {
  button.addEventListener("click", changeWindow);
}