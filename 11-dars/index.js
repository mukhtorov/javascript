// let n = [2, 3, 1, 7, 8, 9, 6];
let str = ["orange", "Apple", "banana", "Kiwi"];

let students = [
  { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
  { id: 2, year: 2000, name: "Asilbek Topilov" },
  { id: 3, year: 2002, name: "Najmiddin Nazarov " },
  { id: 4, year: 2002, name: "Mominov Abdulloh" },
  { id: 5, year: 1995, name: "Sardor Tursunboyev" },
  { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
  { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
  { id: 8, year: 2002, name: "Shukurov Shohruh" },
];

let res = students.group((value) => value.year);
console.log(res);

// let res = {
//   2002: [
//     { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//     { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   ],
//   2007: [
//     { id: 3, year: 2002, name: "Najmiddin Nazarov " },
//     { id: 4, year: 2002, name: "Mominov Abdulloh" },
//   ],
// };

// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// let n = [2, 3, 1, 1, 7, 8, 8, 6];

// console.log(new Array(3, 2, 3));
// console.log(Array.from("webbrain", (v) => v.toUpperCase()));

// let res = n.filter((value, index, array) => array.indexOf(value) === index);

// let obj1 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]).entries();
// let obj2 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]).entries();

// console.log(obj1.next());
// console.log(obj2.next());
// console.log(obj1.next());

// let obj = { name: "webbrain", status: "IT Center" };

// console.log(Object.entries(obj));

// console.log(num);

// console.log(num.flat(Infinity).reduce((s, c) => s + c, 0));

// reduce(callback, initialvalue)
// let res = num.reduce((sum, current, i) => {
//   //   console.log(current, i, current - i);
//   return (sum = current - i);
// }, 0);

// console.log(res);

// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7];

// console.log(a.copyWithin(8, 3, 6));

// console.log(num);

// console.log(num.some((value) => typeof value === "string"));
// console.log(num.every((value) => !isNaN(value * 1)));
// console.log(num.every((value) => !isNaN(value)));

// let res = num.forEach((value, index) => {
//   console.log(value + 2);
// });
// console.log("=====");

// let resmap = num.map((value, index) => {
//   //   console.log(value);
//   return <td>{value.name}</td>
// });

// console.log(res);
// console.log("=====");
// console.log(resmap);

// let res = students.findIndex((value) => {
//   return value.id === 5;
// });
// let res = students.sort((a, b) => a.name.localeCompare(b.name));
// let res = str.sort((a, b) => a.localeCompare(b));
// let res = num.sort((a, b) => b - a);

// let res = students.filter((value) => value.year === 2002);
// let res = students.filter((value) => value.id >= 5);

// let res = str.filter(function (value, index) {
//   return value.length <= 5;
// });

// let res = num.filter((value, index) => {
//   return value < 10;
// });
