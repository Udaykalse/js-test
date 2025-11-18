function add(a, b) {
  return a + b;
}

function Multiple(args) {
  return args[0] * args[1];
}

function square(val) {
  return val * val;
}

function composeFun(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

function compose(...fns) {
  return function (...values) {
    return fns.reduce((a, b) => b(a), values);
  };
}
// const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
const task = compose(Multiple, square);

console.log(task(2, 3));
