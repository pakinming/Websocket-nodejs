import { Server } from "socket.io";
import net from "net";
import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

// const server = net.createServer((socket) => {
//   console.log("connected:! id", socket.id);
//   socket.on("data", (data) => {
//     console.log("data:", data.toString());

//     switch (data.toString().trim()) {
//       case "h":
//         socket.write("Hello, world!\n");
//         server.emit("hello");
//         //myEmitter.emit("hello");
//         break;
//       case "m":
//         socket.write("You get Machine\n");
//         socket.emit("machine", "Broadcast You get Machine");
//         break;
//     }
//   });

//   socket.on("hello", () => {
//     console.log("hello");
//   });
//   socket.on("machine", (m) => {
//     console.log("Machin", m);
//   });
// });

//set MyEmitter
// myEmitter.on("hello", () => {
//   console.log("myEmitter hello");
// });

// server.listen(88);


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