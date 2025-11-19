function evenSum(arr) {
  return arr.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log(evenSum([1, 2, 3, 4]));
