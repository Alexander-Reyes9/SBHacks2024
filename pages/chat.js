import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Message from '../components/Message';
import io from 'socket.io-client';
/**@type {import('socket.io-client').Socket} */
let socket;

export default function Chat() {
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
            <Navbar/>
            <div className='messagebox'>
                <input className = 'typer' onChange={newToBeSent}/>
                <button className='send' onClick={onSend}>Send!</button>
            </div>
            <div className='chatroom'>
                {formattedMessages}
            </div>
        </div>
    );
}