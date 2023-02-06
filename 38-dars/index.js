// url, link, silka, endpoint
// method -> GET, PUT / PATCH, DELETE, POST

// then, promise, async await, try catch

// let response = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(response);
// response.then((res) => res.json()).then((res) => console.log(res));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//     return res;
//   })
//   .then((nnn) => {
//     console.log(nnn, "second");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getData = async () => {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   console.log(data);
// };

const getData = () => {
  dataList.innerText = "Loading...";
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((res) => {
      dataList.innerHTML = `<h1>All Data</h1>`;
      res.forEach((element) => {
        let div = document.createElement("div");
        div.style.display = "flex";
        div.innerHTML = `<b>${element.id}</b> - <span>${element.name}</span> <button onclick="onSelect(${element.id})">select</button>`;
        dataList.append(div);
      });
    });
};

async function onSelect(id) {
  // console.log(id);
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  `,
      },
      body: JSON.stringify({
        email: "webbrain",
        password: 12345,
      }),
    }
  );
  let data = await response.json();
  console.log(data);
  single.innerHTML = `<h1>Selected</h1><b>${data.name}</b> - <span>${data.phone}</span> `;
}

const login = () => {
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
    .then((res) => {
      if (res?.authenticationToken) log.innerText = "Welcome to Facebook";
    });
};
