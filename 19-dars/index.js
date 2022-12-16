// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// }

// let usr = {
//   name: "webbrain",
//   getData() {
//     return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
//       (res) => res.json()
//     );
//   },
// };

// function getCached(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//       return cache.get(x);
//     }
//     let res = func.call(this);
//     return cache.set(x, res);
//   };
// }

// usr.getData = getCached(usr.getData);
// // getData();

// let user = { name: "webbrain", title: "IT Center", getData() {} };

// write
// delete
// loop
// value

// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "getData", { writable: false, enumerable: false });
// // delete user.title;
// // console.log(user);

// for (let vl in user) {
//   console.log(vl);
// }

const user = {
  name: "webbrain",
  last: "Academy",
  get fullName() {
    console.log(this.name, this.last);
  },
  set fullName(value) {
    this.name = value.name;
    this.last = value.last;
    // console.log((this.name, this.last));
  },
};

user.fullName = { name: "eshmat", last: "toshmats" };

user.fullName;
