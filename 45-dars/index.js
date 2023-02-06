let request = indexedDB.open("webbrain", 1);

var db = null;
request.onsuccess = (ev) => {
  db = ev.target.result;
  let trans = db.transaction("frontend", "readonly");
  let users = trans.objectStore("frontend");
  let usr = users.getAll();
  usr.onsuccess = () => {
    usr.result.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `${element.id} - ${element.name}`;
      list.append(div);
    });
  };
};

request.onerror = (er) => {
  console.log(er, "error");
};

request.onupgradeneeded = (ev) => {
  db = request.result;
  if (!db.objectStoreNames.contains("frontend")) {
    db.createObjectStore("frontend", { keyPath: "id" });
  }
};

// add
let id = 1;
create.onclick = () => {
  id++;
  let transaction = db.transaction("frontend", "readwrite");
  let users = transaction.objectStore("frontend");

  let user = {
    id: id,
    name: firstname.value,
    surname: surname.value,
  };
  let req = users.add(user);
};

// update
update.onclick = () => {
  id++;
  let transaction = db.transaction("frontend", "readwrite");
  let users = transaction.objectStore("frontend");

  let user = {
    id: id,
    name: firstname.value,
    surname: surname.value,
  };

  users.put(user);
};

// del
del.onclick = () => {
  let transaction = db.transaction("frontend", "readwrite");
  let users = transaction.objectStore("frontend");
  users.delete(3);
};
