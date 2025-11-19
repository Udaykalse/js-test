const nestArr = [1, 2, [3, [4, 5, 6, 7, [9, [0]]]]];
const flatArr = nestArr.flat(Infinity);
console.log(flatArr);
