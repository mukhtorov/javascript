let parent = document.querySelector(".parent");
let btn = document.querySelector("button");

// let dv = document.createElement("div");
// let txt = document.createTextNode("Hey DOM");
// dv.setAttribute("id", "border");

// dv = parent.cloneNode(true);
// console.log(dv.getAttribute("class"));

// // dv.remove();

// parent.style.fontSize = "20px";
// parent.style.cssText = `

// `;

// console.log(parent.children[0].children);
// parent.children[0].children[0].style.color = "red";
// let chl = parent.children[0].children;

// for (let el = 0; el < chl.length; el++) {
//   if (el % 2 == 0) {
//     chl[el].style.color = "red";
//   } else {
//     chl[el].style.color = "blue";
//   }
// }

// console.log(chl);
// Array.from(chl).forEach((element, index) => {
//   console.log(element);
//   element.style.color = "red";
// });

// console.log(parent.offsetTop);
// console.log(parent.offsetLeft);
// console.log(parent.offsetWidth);
// console.log(parent.clientWidth);
// console.log(parent.clientHeight);
// console.log(parent.scrollHeight);

// console.log(parent.style.height, "jj");
let org = parent.clientHeight;
function expand() {
  //   if (parent.clientHeight === parent.scrollHeight) {
  //     parent.style.height = `${org}px`;
  //     btn.innerHTML = "show more";
  //   } else {
  //     parent.style.height = `${parent.scrollHeight}px`;
  //     btn.innerHTML = "show less";
  //   }
}

parent.scroll(0, parent.scrollHeight);

// function sr() {
//   parent.scrollTo(0, 50);
// }

console.log(parent.getBoundingClientRect());
