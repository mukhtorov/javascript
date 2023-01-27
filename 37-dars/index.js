// console.log("h".charCodeAt());
// console.log("i".charCodeAt());

let buffer = new ArrayBuffer(2); //
let view = new DataView(buffer);

view.setInt8(0, 104);
view.setInt8(1, 105);

// let reader = new FileReader(buffer);
// reader.readAsArrayBuffer(buffer);

// console.log(reader.result);

// console.log(String.fromCharCode(view.getInt8(0)));
// console.log(String.fromCharCode(view.getInt8(1)));

// let unit = new Uint8Array([104, 105]);

// let decoder = new TextDecoder(); // ascii to char
// let encoder = new TextEncoder(); // char to ascii

// console.log(encoder.encode("hi"));

// let blob = new Blob(["hello"], { type: "text/plain" });

// console.log(blob);

// dow.onclick = () => {
//   fetch(
//     "https://yt3.googleusercontent.com/0MxhUKXGNo28gyw5Yl5GS4CBKEOlgV-E_yoTRfBHkDaZEcf2f-SM7uEB83dIeSzl-oy9tTO6DQ=s900-c-k-c0x00ffffff-no-rj"
//   )
//     .then((res) => res.blob())
//     .then((res) => {
//       let url = URL.createObjectURL(res);
//       img.src = url;
//       console.log(url);
//     });

//   let a = document.createElement("a");
// let url = URL.createObjectURL(blob);
// console.log(url);
// a.href = url;
// a.download = "txt";
// document.body.append(a);
// a.click();
//   // a.onclick = ()=>{}
// };

// let reader = new FileReader(); // no param
// const getFile = (e) => {
//   let file = e.target.files[0];
//   reader.readAsText(file);
//   reader.onload = () => {
//     console.log(reader.result);
//   };
// };

dow.onclick = () => {
  let file = new File([buffer], "file.txt", { type: "text/plain" });

  let url = URL.createObjectURL(file);
  let a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  document.body.append(a);
  a.click();
};
