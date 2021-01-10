const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000;

app.use(cors())

const server = app.listen(port, () => {
    console.log(`server connected on port ${port}`)
})
const socketIO = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  socketIO.on("connection", (socket) => {
  
  
    socket.on("mgg", (mensaje) => {
      socketIO.emit("mgs", { mensaje }); //Para mostrar el mje a todos
    });
  
  });

