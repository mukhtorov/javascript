function* getData(param) {
  let i = users.length;
  while (true) {
    yield ++i;
  }
}

const generator = getData();

let users = [
  { id: 1, name: "Eshmat1" },
  { id: 2, name: "Eshmat2" },
  { id: 3, name: "Eshmat3" },
  { id: 4, name: "Eshmat4" },
  { id: 5, name: "Eshmat5" },
  { id: 6, name: "Eshmat6" },
];

const onDelete = (id) => {
  let res = users.filter((vl) => vl.id !== id);
  users = res;
};
const add = (usr) => {
  users = [...users, { id: generator.next().value, name: usr }];
};

add("Gulbashakar1"); // 7
onDelete(3);
add("Gulbashakar2"); // 7
add("Gulbashakar3"); // 8
// onDelete(7);

// console.log(users);
users.map((value, index) => {
  console.log(index + 1, " - ", value.name);
});
