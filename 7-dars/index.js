// let obj = { name: "webbrain" };

// let obj2 = structuredClone(obj);

// console.log(obj2);

// let obj = {
//   name: "webbrain",
//   age: 23,
//   child: {
//     name: "eshmat",
//     age: 11,
//     child: {
//       name: "toshmat",
//       age: 33,
//     },
//   },
// };

// let sum = 0;

// while (obj) {
//   sum += obj.age;

//   obj = obj.child;
// }

// console.log(sum);

// let obj = {
//   Jhon: 10,
//   Ann: 22,
//   Piter: 44,
// };

// let obj1 = { name: "webbrain" };
// let obj2 = { name: "webbrain" };
// let obj3 = obj1;

// obj1.name = "academy";
// obj1 = null;

// console.log(obj1);
// console.log(obj3);

// console.log(this);

// function sayHi() {
//   console.log("Hi");
// }

// let name = "webbrain";

// let user = {
//   // name: "webbrain",
//   name,
//   // sayHi,
//   sayHi() {
//     console.log("I said Hi");
//   },
// };

// user.sayHi();

// let user = {
//   name: "webbrain",
//   sayHi() {
//     // console.log(`Hi, ${user.name}`);
//     console.log(`Hi, ${this.name}`);
//   },
//   getName: function () {
//     return () => {
//       console.log(`Hi, ${this.name}`);
//     };
//   },
// };

// // user.sayHi();
// let usr = user;
// // user = null;
// // usr.sayHi();

// usr.getName()();

// function getName(name) {
//   console.log(new.target);
// this.name = name;
// this.sayHi = function () {
//   console.log("hi ", this.name);
//   return "hey";
// };
// }

// new getName("eshmat");
// // new getName("toshmat").sayHi();

// let func = {};

// func.name = "test";

// console.log(func);

let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1);
// console.log(id1 === id2);
// let name = "symbol";
// let obj = {
//   [id1]: "webbrain",
//   ["id2"]: "Academy1",
//   id2: "Academy2",
//   id2: "Academy3",
//   [id2]: "Academy",
// };

// console.log(obj.id2);

// let obj = {
//   name: "webbrain",
//   title: "IT Center",
//   age: "34567",
// };

// console.log("title" in obj);
// for (value in obj) {
//   console.log(obj[value]);
//   console.log(obj.value);
// }

// let name = "webbrain";

// let obj = {
//   name: "webbrain",
//   title: "IT Center",
//   age: "34567",
//   child: {
//     childname: "testing name",
//   },
// };

// const {
//   name: newName,
//   title,
//   child: { childname: test },
// } = obj;

// console.log(test);
// console.log(obj.age);

// name: "webbrain",

// let obj = {
//   child: {
//     childname: "testing name",
//   },
// };

// console.log(obj);

// obj = { ...obj.child };

// console.log(obj);

const obj = {
  name: "webbrain",
  age: 2345,
};

// console.log({ obj, name: "IT center" });
console.log({ name: "IT center", ...obj });
console.log({ ...obj, name: "IT center" });
// console.log({ name: "IT center", age: 2345, name: "webbrain" });

// obj = { ...obj.child };

// console.log(obj
