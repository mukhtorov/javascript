import { users } from "./data.js";

let data = users;

const ondelete = (id) => {
  let res = data.filter((vl) => vl.id !== id);
  data = res;
  container.innerHTML = null;
  readData();
  console.log(res);
};

// ondelete();

function readData() {
  // if (!data.length) container.innerHTML = "No data";
  data.forEach((value) => {
    let div = document.createElement("div");
    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    // btn.addEventListener("click", ondelete(value.id));
    btn.addEventListener("click", () => ondelete(value.id));
    div.innerHTML = `${value.id} - ${value.name}`;
    div.append(btn);
    container.append(div);
  });
}

readData();
