let x;
let y;

// mathematical operators
function add(x, y) {
  let a = x + y;
  return a;
}

function substract(x, y) {
  let a = x - y;
  return a;
}

function multiply(x, y) {
  let a = x * y;
  return a;
}

function divide(x, y) {
  let a = x / y;
  return a;
}

function operate() {}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});
