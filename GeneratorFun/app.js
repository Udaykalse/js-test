function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
  yield 22;
}

// const even = count();

// for (const v of even) {
//   console.log(v);
// }

function* makeIteratorNew(start, end, stepSize = 1) {
  for (let i = start; i <= end; i += stepSize) {
    yield i;
  }
}
const btn = document.getElementById("next_btn");
let one = makeIteratorNew(1, 20, 1);

// for (const val of one) {
//   console.log(val);
// }

btn.addEventListener("click", () => {
  btn.innerText = one.next().value;
  one.one.next();
});
