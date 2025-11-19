const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length);

console.log("------------------------------------------");
const user = { name: "Uday", age: 22 };

console.log("name" in user);
console.log(user.hasOwnProperty("age"));

console.log("------------------------------------------");

const obj1 = { a: 10, b: 20, c: 30 };
for (let key in obj1) {
  console.log(key, obj1[key]);
}

console.log("------------------------------------------");

const obj2 = { a: 101, b: 202, c: 303 };
console.log(Object.entries(obj2));


