// let token = null;

// formEvent.onsubmit = (e) => {
//   e.preventDefault();

//   fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email.value,
//       password: password.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => (token = res?.authenticationToken));
// };

// const getSingle = () => {
//   console.log(localStorage.getItem("token"), "token");
//   fetch("https://houzing-app.herokuapp.com/api/v1/categories/1", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     });
// };

// const getCategory = () => {
//   fetch("https://houzing-app.herokuapp.com/api/v1/categories/list", {})
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       res.data.forEach((element) => {
//         let div = document.createElement("div");
//         div.innerHTML = `<h1>${element.id} - ${element.name} - <button onclick="getSingle()" >select</button></h1>`;
//         category.append(div);
//       });
//     });
// };

// // console.log(search.delete("address"));
// // console.log(search.get("address"));
// console.log(search.set("address", "gunja"));
// console.log(url.search);

let url = new URL(window.location);
let search = url.searchParams; // append, get has set

// address.value = search.get("address");
// city.value = search.get("city");
// zip.value = search.get("zip");

const replace = (value, name) => {
  if (!value) {
    search.delete(name);
  } else {
    search.set(name, value);
    // search.append(name, value);
  }
  path.innerText = url.href;
  return url.href;
};

let div = document.createElement("a");
const onChangeValue = (e) => {
  const {
    target: { value, name },
  } = e;
  replace(value, name);
  // div.href =
  // div.click();
};
