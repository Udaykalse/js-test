(function (a, b) {
  console.log(a + b);
})(1, 2);

(function sayHi() {
  console.log("Hey......!");
})();

(() => console.log("Its Es6"))();

const atm = function (initalBalc) {
  let balance = initalBalc;
  function withdraw(amt) {
    if (amt > balance) {
      return "No balance";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw };
};

const uday = atm(10000000);
console.log(uday.withdraw(97890000));
