function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
console.log(isEqual([1, 2], [1, 2]));

function findDup(arr) {
  return arr.filter((itM, idX) => arr.indexOf(itM) !== idX);
}

console.log(findDup([1, 2, 3, 4, 3, 4]));
