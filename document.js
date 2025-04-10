const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
let documentContent = "";

app.use(express.static(__dirname));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.emit("text-update", documentContent);

  socket.on("text-change", (newText) => {
    documentContent = newText;
    socket.broadcast.emit("text-update", newText);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
