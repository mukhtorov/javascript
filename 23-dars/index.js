// try {
//   //   console.log(number);
//   //   JSON.parse(`{name:"webbrain"}`);
//   throw new Error("smth went wrong");
// } catch {
//   console.log("smth went wrong");
// }

var database = {
  najmiddin: {
    login: "najmiddin",
    password: 12345,
    fullname: "Najmiddin Najmiddin",
  },
  sardorbek: {
    login: "sardorbek",
    password: 12345,
    fullname: "Sardorbek Sardorbek",
  },
};

console.log("started...");

// const login = (lg, pw, callback) => {
//   setTimeout(() => {
//     if (database.najmiddin.login === lg && database.najmiddin.password === pw) {
//       return callback(`${database.najmiddin.fullname}, Welcome to Facebook`);
//     } else {
//       return callback(`Qo'chqorvoy aka paroliz notogri`);
//     }
//   }, 1000);
// };

// const callback = (usr) => {
//   console.log(usr);
//   console.log("finished");
// };

// login("najmiddin", 1234, callback);

// const login = (lg, pw, call) => {
//   setTimeout(() => {
// if (database.najmiddin.login === lg && database.najmiddin.password === pw) {
//   return call(
//     ` Welcome to Facebook`,
//     () => `${database.najmiddin.fullname}`
//   );
// } else {
//   return call(`Qo'chqorvoy aka paroliz notogri`);
// }
//   }, 1000);
// };

// login("najmiddin", 12345, (usr, getFullname) => {
//   console.log(usr);
//   console.log(getFullname());
//   console.log("finished");
// });

let user = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.najmiddin.login === "najmiddin" &&
      database.najmiddin.password === 12345
    )
      resolve(` Welcome to Facebook`);
    else reject(`Qo'chqorvoy aka paroliz notogri`);
  }, 1000);
});

// async function get() {}
const get = async () => {
  let res = await user;
  console.log(res);
  console.log("finished");
};
get();
// user.then((res) => console.log(res));

// console.log("finished");

// let all = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (
//         database.najmiddin.login === "najmiddin" &&
//         database.najmiddin.password === 12345
//       )
//         resolve(` Welcome to Facebook`);
//       else reject(`Qo'chqorvoy aka paroliz notogri`);
//     }, 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (
//         database.najmiddin.login === "najmiddin" &&
//         database.najmiddin.password === 12345
//       )
//         resolve(` Welcome to Facebook`);
//       else reject(`Qo'chqorvoy aka paroliz notogri`);
//     }, 1000);
//   }),
// ]);
// all.then((res) => console.log(res)).catch((err) => console.log(err));

// user
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });
// //   .finally(() => console.log("finished"));
// console.log("finished");
