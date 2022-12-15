let user = {
  name: "Webbrain",
  lastname: "Academy",
  title: "IT Center",
};
let user2 = {
  name: "Digital",
  lastname: "One",
  title: "IT Center",
};

let users = [
  {
    name: "Webbrain",
    lastname: "Academy",
    title: "IT Center",
  },
  {
    name: "Digital",
    lastname: "One",
    title: "IT Center",
  },
];
function getFull(a) {
  console.log(a);
  console.log(`${this.name} ${this.lastname}`);
}

getFull.call(user);
getFull.apply(user);
getFull.bind(user, "hey")();

// for (let usr of users) {
//   // getFull.call(usr, "eshmat", "toshmat");
//   getFull.apply(usr, ["eshmat", "toshmat"]);
// }

// getFull.call({ name: "webbrain", lastname: "Academy" });
// user2.getFull();
