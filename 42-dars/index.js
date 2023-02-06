let server = [
  { id: 1, name: "webbrin 1" },
  { id: 2, name: "webbrin 2" },
  { id: 3, name: "webbrin 3" },
  { id: 4, name: "webbrin 4" },
  { id: 5, name: "webbrin 5" },
];

let users = JSON.parse(sessionStorage.getItem("users")) || server;
const getData = () => {
  users.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `${item.name}`;
    div.addEventListener("click", () => {
      let res = users.filter((v) => v.id !== item.id);
      list.innerHTML = null;
      users = res;
      sessionStorage.setItem("users", JSON.stringify(res));
      getData();
    });
    list.append(div);
  });
};

getData();
