const jwt = require("jsonwebtoken");

const sockets = {};

module.exports = {
    init: (http) => {
        const io = require("socket.io")(http);
        io.on("connection", (socket)=>{
            try{
                const sender = jwt.verify(socket.handshake.query['token'], process.env.JWT_KEY);
                const senderId = sender._id;
                sockets[senderId] = socket; 
            }
            catch(error){/* Don't connect*/}
        })
    },

    sendMessage: (userId, message) => {
        sockets[userId] ? 
            socket[userId].emit("newMessage", message) : 
            null;
    }
}