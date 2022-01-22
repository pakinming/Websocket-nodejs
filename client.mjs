import net from "net";
import { EventEmitter } from "events";
import { io } from "socket.io-client";

const myEmitter = new EventEmitter();



const socket = io("http://localhost:88");

socket.on("connect", () => {
  console.log("connect", socket.id);
  console.log(socket.connected);
});

setInterval(() => {
  socket.send("send message"); //event meassage
  socket.emit("hello", socket.id);

  console.log(socket.connected);
}, 100);

socket.on("message", (data) => {
  console.log(socket.id, data);
});
socket.on("hello", (data) => {
  console.log("hello", data);
});
