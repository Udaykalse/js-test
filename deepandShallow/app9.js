function arr(a) {
  for (let i = 0; i < a.length+1; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  return a;
}
arr([1, 2, 3, 4]);
