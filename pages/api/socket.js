import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    if(!res.socket.server.io) {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connect', socket => {
            console.log('User connected.');
            socket.on('disconnect', () => console.log("User disconnected."))
            
            socket.on('message', msg => {
                io.emit('message', msg);
              });    
        });
    
    }

    res.end();
}

export default SocketHandler;