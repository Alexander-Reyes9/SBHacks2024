import { useState, useEffect } from "react";
import io from "socket.io-client";
let socket;

const test = () => {
    const [thing, setThing] = useState('');
    useEffect(() => {
        const socketInitializer = async () => {
            await fetch('/api/socket');
            socket = io();
    
            socket.on('connect', () => console.log('connected!'));
    
            socket.on('message', message => {
                setThing(message);
            });
        }

        socketInitializer();
    }, []);



    function onChange(e) {
        socket.emit('message', e.target.value);
    } 
    
    return (
        <div>
            <input type="text" onChange={onChange}/>
            <p>{thing}</p>
        </div>
    )
}

export default test;