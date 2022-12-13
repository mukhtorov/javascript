// let a = 1;
// a = 1;
// var a = 2;
// a = 3;
// console.log(a);

// {
//   let b = "wba";
// }

// console.log(b);
// var i=1
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (i ; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);
let name = "webbrain";

function outer() {
  let n = "wba";
  console.log(name);
  return function () {
    console.log(name);
  };
}

// function getName() {
//   let b = 'wba'
//   console.log(name);
//   return function(){
//     console.log(name, b);
//   };
// }
