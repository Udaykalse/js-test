const onlyDigit = (str) => /^\d+$/.test(str);
console.log(onlyDigit("1234"));

function toTitleCase(str1) {
  return str1
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(toTitleCase("javascript interview questions"));

function manualSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(manualSort([3, 1, 2]));
