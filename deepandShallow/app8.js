function countVOwels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVOwels("Udaysinh"));
