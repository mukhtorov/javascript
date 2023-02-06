// fetch("./txt.txt")
// .then((res) => res.blob())
// .then((res) => console.log(res));

let token = null;

formEvent.onsubmit = (e) => {
  e.preventDefault();

  // let body = new FormData(formEvent);

  fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => (token = res?.authenticationToken));
};

const getSingle = () => {
  console.log(localStorage.getItem("token"), "token");
  fetch("https://houzing-app.herokuapp.com/api/v1/categories/1", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.data.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<h1>${element.id} - ${element.name} - <button>select</button></h1>`;
        category.append(div);
      });
    });
};

const getCategory = () => {
  fetch("https://houzing-app.herokuapp.com/api/v1/categories/list", {})
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.data.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML = `<h1>${element.id} - ${element.name} - <button onclick="getSingle()" >select</button></h1>`;
        category.append(div);
      });
    });
};
