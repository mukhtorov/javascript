// const data = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("worked");
//   }, 1000);
// });

// const getData = async () => {
//   let res = await data;
//   console.log(res, "test");
// };

// getData();
// console.log("working");

// yield, return
function* getData(param) {
  let i = 0;
  while (true) {
    let gn = yield ++i;
    if (gn) i += gn;
  }
}

const generator = getData();

console.log(generator.next());
console.log(generator.next(3));
console.log(generator.next(4));

// const gr = getData();

// for (vl of generator) {
//   console.log(vl);
// }

// console.log([...generator]);

// console.log(generator.next());
// console.log(generator.next());
// console.log(gr.next());

// let users = [
//   { id: 1, name: "Eshmat1" },
//   { id: 2, name: "Eshmat2" },
//   { id: 3, name: "Eshmat3" },
//   { id: 4, name: "Eshmat4" },
//   { id: 5, name: "Eshmat5" },
//   { id: 6, name: "Eshmat6" },
// ];

// const onDelete = (id) => {
//   let res = users.filter((vl) => vl.id !== id);
//   users = res;
// };
// const add = (usr) => {
//   users = [...users, { id: generator.next().value, name: usr }];
// };

// add("Gulbashakar1"); // 7
// onDelete(3);
// add("Gulbashakar2"); // 7
// add("Gulbashakar3"); // 8
// // onDelete(7);

// console.log(users);
