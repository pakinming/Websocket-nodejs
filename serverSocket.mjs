import { Server } from "socket.io";
import net from "net";
import { EventEmitter } from "events";
const myEmitter = new EventEmitter();


// const io = require("socket.io").listen(server);
const io = new Server()
io.on("connection", (socket) => {
    console.log("connected:!", socket.id);
    socket.join("hello");
    // socket.on("message", (data) => {
    //   console.log("data:", data.toString());
    // });
    socket.on("hello", (data) => {
      // console.log("hello");
      socket.send("hello");

      io.emit("hello", ["emit event Hello", data]);
    });
});

io.listen(88);