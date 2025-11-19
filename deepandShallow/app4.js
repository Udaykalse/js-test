function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([1, 2, 3, 4, 5]));
