// let socket = new WebSocket("ws://127.0.0.1:5500/41-dars/index.html");

// socket.onopen = () => {
//   console.log("socket connected");
// };

// socket.onmessage = (event) => {
//   let div = document.createElement("div");
//   div.innerText = event?.data;
//   msg.append(div);
//   console.log(event);
// };

// socket.onerror = () => {
//   console.log("error");
// };
// socket.close = () => {
//   console.log("close");
// };

// send.onclick = () => {
//   console.log("send");
//   socket.send(value.value);
//   value.value = "";
// };

fetch("http://localhost:8080/users",{
  body: {}
}).then((res) => {
  console.log(res);
  return res.json();
});
