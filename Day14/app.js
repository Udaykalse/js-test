function main() {
  const name = "Uday";
  function sayMyName() {
    console.log(name);
  }
  sayMyName();
}

main();

function adder(num){
    function add(b){
        console.log(num+b);
    };
    return add;
};

const addtoFS=adder(5);

addtoFS(3);
addtoFS(4);
addtoFS(5);

const myName = document.getElementById("myName");
const myButton = document.getElementById("my-Button");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const sizeA = makeTextSizer(12);
const sizeB = makeTextSizer(120);
const sizeC = makeTextSizer(2);
const sizeD = makeTextSizer(10);

myButton.addEventListener("click", sizeB);

function makeCounter() {
  let count = 0;
  function inc() {
    console.log(count++);
  }
  return inc;
}

const counter = makeCounter();
counter();
counter();
counter();
counter();
counter();
counter();

