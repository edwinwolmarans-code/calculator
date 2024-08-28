let x = [];
let y = [];
let input = [];
let op;

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

function operate() {
  seperator = input.indexOf("|");
  console.log(`Seperator index ${seperator}`);
  input.forEach((item, index) => {
    if (index < seperator) {
      x.push(item);
    } else if (index > seperator) {
      y.push(item);
    }
  });
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // adds button content to an array
    if (button.id === "divide") {
      op = button.id;
      input.push("|");
    } else if (button.id === "mult") {
      op = button.id;
      input.push("|");
    } else if (button.id === "sub") {
      op = button.id;
      input.push("|");
    } else if (button.id === "plus") {
      op = button.id;
      input.push("|");
    } else if (button.id === "equal") {
      operate();
    } else {
      input.push(button.textContent);
    }
    console.log(`input array: ${input}`);
    console.log(`operation: ${op}`);
  });
});
