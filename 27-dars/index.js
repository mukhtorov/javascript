// let user = {
//   name: "webbrain",
//   _stir: 123456,
// };
// let proxy = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith("_")) return `access for ${prop} is dineid`;
//     return target[prop];
//   },
// });

// proxy.title = "IT Center";

// // console.log(user);
// console.log(proxy.title);

// let ar = [1, 2, "wba", 3];

// let user = { name: "webbrain", pw: 1234 };

// let proxy = new Proxy(ar, {
//   get(target, prop) {
//     if (target.indexOf(prop)) return prop;
//     else return -1;
//   },
// });

// console.log(proxy["wbaa"]);

// proxy.pw = "it center";

// console.log(proxy);

// let user = { name: "webbrain", _pw: 1234 };

// Reflect.set(user, "title", "IT center");
// let range = {
//   from: 1,
//   to: 10,
// };

// console.log(Reflect.get(user, "_pw"));
// let proxy = new Proxy(range, {
//   has(target, prop) {
//     return target.from <= prop && target.to >= prop;
//   },
// });

// range.to = 100;
// console.log(11 in proxy);

// // keys, value, entries
// let proxy = new Proxy(user, {
//   ownKeys(target) {
//     return Object.keys(target).filter((vl) => !vl.startsWith("_"));
//   },
// });

// console.log(proxy);

// for (vl in proxy) {
//   console.log(vl);
// }

// let user = {
//   name: "webbrain",
//   _pw: 1234,
//   get() {
//     console.log(user.name, user._pw);
//   },
// };

// let data = user.get;
// user = null;
// data();

// // data.call(user);
// globalThis.name = "hey";
// function get() {
//   console.log(this);
// }
// console.log(this);

// // get();

// globalThis.name = "hey";

// console.log(globalThis.name);
