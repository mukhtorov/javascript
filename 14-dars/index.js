// // let obj = {};

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "IT Center"],
// ]);
// map.set("name", "wba");

// console.log(map.title);
// console.log(Object.fromEntries(map).name);

// map.map((element) => {
//   console.log(element);
// });

// let gen = map.entries();
// gen.next();
// // gen.next();
// console.log(gen.next());
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// for (let vl of map.keys()) {
//   console.log(vl);
// }

// obj.name = "webbrain";
// map.title = "webbrain";

// console.log(obj, obj.name);

// map.set(123, "IT Center");
// map.set("title", "IT Center");
// map.set("name", "IT Center");
// // console.log(map.size, map.get(123));
// console.log(map.clear());
// console.log(map);

// // Set
// let obj = { name: "webbrain" };
// function name(params) {
//   console.log();
// }
// let set = new Set();
// set.add("eshmat");
// set.add("toshmat");
// set.add("eshmat");

// console.log(set);

// new Map, WeakMap

let map = new Map([
  ["name", "webbrain"],
  ["title", "IT Center"],
]);

let obj = { data: map };
map = null;

console.log(map);
