// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(
//         `Sending Email to ${to} with Subject of ${subject} and ${body}`
//       );
//     };
//   };
// }

const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending Email to ${to} with Subject of ${subject} and ${body}`;
let step1 = sendAutoEmail("udaykalse123@gmail.com");
let step2 = step1("New Order Conformation");
console.log(step2("Done"));
