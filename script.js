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

function swop() {
  let num = -1 * convert();
  display(num);
  return num;
}
// function percentage(x, y) {
//   if (y === 0) {
//     let a = x / 100;
//     display(a);
//   } else {
//     let a = (x / 100) * y;
//     display(a);
//     return a;
//   }
// }

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

function convert() {
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
  return [x, y];
}

function operate() {
  let [x, y] = convert();
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);

  if (op === "plus") {
    add(x, y);
  } else if (op === "sub") {
    substract(x, y);
  } else if (op === "mult") {
    multiply(x, y);
  } else if (op === "divide") {
    divide(x, y);
  } else if (op === "percent") {
    percentage(x, y);
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
      button.id === "divide" ||
      button.id === "percent"
    ) {
      op = button.id;
      input.push("|");
    } else if (button.id === "equal") {
      operate();
    } else if (button.id === "clear") {
      clear();
      display(0);
    } else if (button.id === "sign") {
      swop();
    } else {
      input.push(button.textContent);
    }
    console.log(`input array: ${input}`);
    console.log(`operation: ${op}`);
  });
});
