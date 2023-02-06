// let data = document.querySelectorAll("h1");
// console.log(data);

// let range = new Range();
// range.setStart(data[0].firstChild, 0);
// range.setEnd(data[0].firstChild, 6);

// window.getSelection().addRange(range);

// let div = document.createElement("em");
// div.style.color = "red";
// let txt = data[0].innerText;

// let temp = 0;
// inp.oninput = (event) => {
//   if (event.target.value !== "") ++temp;

//   data[0].innerText = txt;
//   range.setStart(data[0].firstChild, 0);
//   range.setEnd(data[0].firstChild, temp);
//   range.surroundContents(div);
// };

const selection = getSelection();
console.log(selection);

document.onselectionchange = (e) => {
  console.log(selection.getRangeAt(0).cloneContents());
};
