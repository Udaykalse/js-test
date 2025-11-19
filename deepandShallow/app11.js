const small = (arr) => Math.min(...arr);
const Big = (arr) => Math.max(...arr);
console.log(small([1, 2, 3, 4, 5]));
console.log(Big([1, 2, 3, 4, 5]));

function reverse(array) {
  let res = [];
  for (let i = array.length - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  return res;
}

console.log(reverse([1, 2, 3]));
