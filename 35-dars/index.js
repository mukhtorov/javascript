// only html
// document.addEventListener("DOMContentLoaded", () => {
//   // test.innerText = "Lorem";
//   console.log(performance.now(), "DOMContentLoaded");
// });

// // document.addEventListener("onload", () => {
// // });

// // style / image
// window.onload = () => {
//   console.log(performance.now(), " load");
// };

// test.innerText = "Lorem";

// window.onbeforeunload = () => {
//   return true;
// };

let observer = new MutationObserver(() => {
  console.log("working");
});

let parent = document.querySelector("#parent");
let desc = document.querySelector("#desc");

observer.observe(parent, {
  childList: true,
  subtree: true,
  characterData: true,
  attributes: true,
});

btn.onclick = () => {
  parent.classList.add("title");
};
