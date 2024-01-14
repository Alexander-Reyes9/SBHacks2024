import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import io from 'socket.io-client';
/**@type {import('socket.io-client').Socket} */
let socket;

export default function Chat() {
    const router = useRouter();

    useEffect(() => {
        if(typeof window !== "undefined" && !localStorage.getItem('userid')) {
            router.push('/login');
        }
    }, []);

    let messages = [];
    const [formattedMessages, _updateFormattedMessages] = useState([]); 
    const updateFormattedMessages = () => _updateFormattedMessages(
        messages.map((message, i) => 
            <Message key={i} user={message.user || 'System'} content={message.content || message}/>
        )
    );
    const [toBeSent, setToBeSent] = useState('');
    const newToBeSent = e => setToBeSent(e.target.value);

    useEffect(() => {
        const socketInitializer = async () => {
            await fetch('/api/socket');
            socket = io();
    
            socket.on('connect', () => {
                console.log('Connected!');
                socket.emit('joinWaitRoom');
            });
            
            socket.on('message', (sender, content) => {
                console.log('received');
                messages.push({user: sender == socket.id ? 'You' : 'Stranger', content});
                updateFormattedMessages();
            });
        }

        socketInitializer();
    }, []);

    

    function onSend() {
        console.log('sent the following message: ', toBeSent);
        socket.emit('message', toBeSent);
    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <Navbar/> <br/>
            <center>
                <div className='messagebox'>
                    <p>Send a message!</p> <br/>
                    <input className = 'typer' onChange={newToBeSent}/>
                    <button className='send' onClick={onSend}>Send!</button>
                </div>
                <div className='chatroom'>
                    {formattedMessages}
                </div>
            </center>
        </div>
    );
}