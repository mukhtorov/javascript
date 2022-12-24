// function sum(a) {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// }
// console.log(sum(1)(2)(3)(4)());

// var count = 0;
// function sum(a) {
//   count += a;
//   return function f(b) {
//     count += b;
//     return f;
//   };
// }
// sum(1)(2)(3)(4)(5);
// console.log(count);

// let user = {};

// function getCashe(func) {
//   let cashe = new Map();
//   return function (x) {
//     if (cashe.has(x)) {
//       return cashe.get(x);
//     }
//     let res = cashe.set(x, func(x));
//     return res;
//   };
// }

// let usr = { data: { name: "webbrain" } };

// function tes(){
//   console.log();

//   return;

//   console.log();
// }

// let x = 9;
// if (x < 10) {
//   console.log("kichik");
// }
// console.log("katta");

// let f = (a) => a;

// let cache = new Map();

// let x = 10;
// cache.set(x, f());
// cache.set(x, f());
// x = 20;
// cache.set(x, f());
// cache.set(x, f());
// // cache.set(x, f());

// console.log(cache);

function Moment() {}

Object.assign(Moment.prototype, { local: "ney" });

console.log(Moment);
