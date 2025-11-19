const a = { x: 1 };
const b = { y: 2 };
const me = { ...a, ...b };
console.log(me);

console.log("------------------------------------------");

const user1 = { name: "aman", age: 24 };
delete user1.age;
console.log(user1);

console.log("------------------------------------------");
console.log("🟦 8. Freeze an object (make read-only)");
const obj1 = { x: 10 };
Object.freeze(obj1);

obj1.x = 20;
console.log(obj1);

console.log("------------------------------------------");

console.log("🟦 9. Clone an object");
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);

console.log("------------------------------------------");

console.log("🟦 10. Find keys whose value is even");

const objA = { a: 2, b: 5, c: 8 };
const evenKeys = Object.keys(objA).filter((k) => objA[k] % 2 === 0);
console.log(evenKeys);

console.log("------------------------------------------");

console.log("🟦 11. Convert object values to numbers");

const obj11 = { a: "10", b: "20" };
const result = Object.fromEntries(
  Object.entries(obj11).map(([k, y]) => [k, Number(y)])
);
console.log(result);
