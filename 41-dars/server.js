const WebSocket = require("ws");

let ws = new WebSocket.Server({ port: 5500 });

ws.on("connection", (w, req) => {
  console.log("New clinet connected");

  w.on("close", (w) => {
    console.log("New cline disconnected");
  });

  w.onmessage = (e) => {
    ws.clients.forEach((client) => {
      client.send(e.data);
    });
  };
});
