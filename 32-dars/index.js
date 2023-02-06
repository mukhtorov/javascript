// // function onclick() {
// //   console.log("button clicked");
// // }
// function onmousedown() {
//   console.log("button onmousedown");
// }
// function onmouseup() {
//   console.log("button onmouseup");
// }

// class Events {
//   // handleEvent(event) {
//   // console.log(event);
//   // switch (event.type) {
//   //   case "click":
//   //     onclick();
//   //     break;
//   //   case "mousedown":
//   //     onmousedown();
//   //     break;
//   // }
//   // }
//   onClick() {
//     alert("button clicked");
//     // button.innerHTML = "hey";
//   }
// }

// const evn = new Events();

// button.addEventListener("click", evn);

// function child(event) {
//   console.log(event);
//   event.stopPropogation(); // skip
//   // event.stopImmediatePropagation(); // skip
//   alert("child");
// }
// const parent = () => {
//   alert("parent");
// };
// const grand = () => {
//   alert("grand");
// };

let target;
table.onclick = function (event) {
  // tr
  if (target) {
    // return;
  }
  // target?.classList.remove("highlite");
  // target = null;
  target = event.target;
  target?.classList.toggle("highlite");
};

// let check = false;

const onbutton = (event) => {
  event.preventDefault();
  // alert("hey");
  // return false;
};
