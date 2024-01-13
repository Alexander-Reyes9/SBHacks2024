import { Server } from "socket.io";
let i = 0;
/**Array formatted to connection objects. Contains a roomId and users, an array with 2 socketIds*/
/**Todo: use redis for this*/
let connections = [];

const SocketHandler = (req, res) => {
    if(!res.socket.server.io) {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connect', socket => {
            console.log('User connected.');
            
            //* Matching algorithm here, but until then, match to first available user
            if(io.sockets.adapter.rooms.get('waiting') && io.sockets.adapter.rooms.get('waiting').size >= 1) {
                io.in('waiting').fetchSockets().then(async sockets => {
                    let otherSocket = sockets[0];
                    let roomId = `room${++i}`;
        
                    await socket.join(roomId);
                    otherSocket.leave('waiting');
                    otherSocket.join(roomId);
                    connections.push({roomId, users: [otherSocket.id, socket.id], expired: false});
                    console.log(io.sockets.adapter.rooms);
                });
            } else socket.join('waiting');


            socket.on('disconnect', () => {
                console.log('disconnected');
                //Remove other user from room and put into waiting
                let connection = connections.find(e =>  e.users.find(o => o === socket.id));
                if(!connection) return console.log('no connection found on disconnect');
                
                let otherUserId = connection.users.find(e => e !== socket.id);
                io.fetchSockets().then(sockets => {
                    let theSocketInQuestion = sockets.find(e => e.id === otherUserId);
                    if(!theSocketInQuestion) return console.log("Other user is probably dead lmao");
                    theSocketInQuestion.leave(connection.roomID);
                    theSocketInQuestion.join('waiting');
                });

                //Remove from connections database
                connections.find(e => e.roomId == connection.roomId).expired = true;
                setTimeout(() => {
                    let toRemove = connections.findIndex(e => e.roomId == connection.roomId);
                    connections.splice(toRemove, 1);
                }, 10e3);
            });
            

            socket.on('message', msg => {
                console.log('received a message!');
                let connection = connections.find(e =>  e.users.find(o => o == socket.id));
                if(!connection) return console.log('No connection found!');

                console.log('sending a message!');
                io.to(connection.roomId).emit('message', socket.id, msg);
            });
        });
    
    }

    res.end();
}

export default SocketHandler;