let form = document.forms.bunkerForm;

// login.setAttribute("name", "lg");
// form.elements.login.name = "lg";

// console.log(form.login.name);
// console.log(form.elements.login.name);

// console.log(form.select.options[2]);

// login.onblur = (event) => {
//   console.log("test", event.target.value);
//   if (event.target.value.includes("@")) {
//     loginError.innerHTML = null;
//   } else {
//     loginError.innerHTML = "hey";
//     loginError.style.color = "red";
//   }
// };

// login.onkeypress = (event) => {
//   loginError.innerHTML = null;
// };
// login.onfocus = (event) => {
//   loginError.innerHTML = null;
// };

form.onsubmit = (event) => {
  form.action = `https://jsonplaceholder.typicode.com/todos/${form.select.value}`;
  form.method = "PUT";
  // event.preventDefault();
  console.log(form.select.value);
};
