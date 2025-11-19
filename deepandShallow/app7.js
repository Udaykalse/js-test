function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3));
