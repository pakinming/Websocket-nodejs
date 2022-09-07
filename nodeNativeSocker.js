// Node.js socket server script
const net = require("net");

// Create a server object
const server = net
  .createServer((socket) => {
    socket.on("data", (data) => {
      console.log(data.toString());
    });

    // socket.write("");
    socket.end("Connected server!");
  })
  .on("error", (err) => {
    console.error(err);
  });

// Open server on port 9898
server.listen(4444, () => {
  console.log("opened server on", server.address().port);
});
