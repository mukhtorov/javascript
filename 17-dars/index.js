// function get() {
//   a = 30;
// }
// get();
// // a = 20;

// const test = function(){}
// function test2(){}

// globalThis.a = 10;

// (() => {
//   var a = 30;
//   console.log(a);
// })();

// console.log(a);

// function Test(a, b, ...rest) {
//   console.log("hey js");
//   this.locale = function () {
//     console.log(new Date());
//   };
//   return () => {
//     return {
//       getTime() {
//         console.log(new Date().getTime());
//       },
//     };
//   };
// }

// let moment = new Test();
// console.log(moment.locale());
// console.log(moment().getTime());
// // console.log(test.length);

// const getName = function recursion(name) {
//   console.log(`Hi, ${name}`);
//   return recursion();
// };

// getName("Webbrain");
// getName("PDP");
// getName("NT");

// let getName = new Function(`console.log(hey)`);
// getName();

// console.log(1);

// const get = () => {
//   for (let i = 0; i <= 10000; i++) {}
//   console.log(4);
// };
// get();
// setTimeout(
//   (a, b) => {
//     console.log(2, a, b);
//   },
//   0,
//   "hey",
//   "be"
// );

// console.log(3);
// // 1 3 4 2
// // 1 4 3 2
// // 1 3 2 4

// let id = setInterval(() => {
//   let date = new Date();
//   console.log(
//     `Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//   );
// }, 1000);

// clearInterval(id);
// clearTimeout(id)

let getName = () => {
  return (name) => {
    console.log(`my ${name}`);
  };
};

// let call = getName("Khon");

// call("Webbrain");

getName()("webbrain");
