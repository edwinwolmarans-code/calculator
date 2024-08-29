let numOne = [];
let numTwo = [];
let input = [];
let op;

// mathematical operators
function add(x, y) {
  let a = x + y;
  display(a);
  return a;
}

function substract(x, y) {
  let a = x - y;
  display(a);
  return a;
}

function multiply(x, y) {
  let a = x * y;
  display(a);
  return a;
}

function divide(x, y) {
  if (y === 0) {
    display("do you even math bro?!");
  } else {
    let a = x / y;
    display(a);
    return a;
  }
}

function display(a) {
  const display = document.querySelector("#display");
  display.textContent = a;
}

function clear() {
  x = 0;
  y = 0;
  input = [];
  numOne.length = 0;
  numTwo.length = 0;
}

function operate() {
  seperator = input.indexOf("|");
  console.log(`Seperator index ${seperator}`);
  input.forEach((item, index) => {
    if (index < seperator) {
      numOne.push(item);
    } else if (index > seperator) {
      numTwo.push(item);
    }
  });
  let x = Number(numOne.join(""));
  let y = Number(numTwo.join(""));

  if (op === "plus") {
    add(x, y);
  } else if (op === "sub") {
    substract(x, y);
  } else if (op === "mult") {
    multiply(x, y);
  } else if (op === "divide") {
    divide(x, y);
  }
  clear();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // adds button content to an array
    if (
      button.id === "plus" ||
      button.id === "sub" ||
      button.id === "mult" ||
      button.id === "divide"
    ) {
      op = button.id;
      input.push("|");
    } else if (button.id === "equal") {
      operate();
    } else if (button.id === "clear") {
      clear();
      display(0);
    } else {
      input.push(button.textContent);
    }
    console.log(`input array: ${input}`);
    console.log(`operation: ${op}`);
  });
});
