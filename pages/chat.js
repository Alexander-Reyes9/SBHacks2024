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
            <Message key={i} user={message.user || '[SYSTEM]'} content={message.content || message}/>
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
                messages.push(`Connected to server, awaiting match...`);
                updateFormattedMessages();
                socket.emit('joinWaitRoom', localStorage.getItem('userid'));
            });

            socket.on('connectionMade', async (ids) => {
                let theirId = ids.filter(e => e == localStorage.getItem('userid'))[0];
                const theirData = await fetch('/api/getUserData', {
                    body: theirId,
                    method: "POST"
                }).then(res => res.json());

                clearChat();
                messages.push(`You've just matched with a stranger from ${theirData.school[0].toUpperCase() + theirData.school.slice(1)} Class of ${theirData.year || '[REDACTED]'}!`);
                messages.push(`They major in ${theirData.major || '[REDACTED]'} and they are interested in ${theirData.interests || '[REDACTED]'}.`);
                updateFormattedMessages();
            });
            
            socket.on('userDisconnect', () => {
                messages.push('The other user has disconnected. You will be moved back to the waiting room shortly.');
                updateFormattedMessages();
                setTimeout(() => {
                    clearChat();
                    messages.push(`Connected to server, awaiting match...`);
                    updateFormattedMessages();
                }, 4e3);
            })

            socket.on('message', (sender, content) => {
                console.log('received');
                messages.push({user: sender == socket.id ? 'You' : 'Stranger', content});
                updateFormattedMessages();
            });
        }

        socketInitializer();
    }, []);

    function clearChat() {
        messages = [];
        updateFormattedMessages();
    }    

    function onSend() {
        console.log('sent the following message: ', toBeSent);
        setToBeSent('');
        socket.emit('message', toBeSent);
    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <Navbar/>
            <div className='chatpage'>
                <div className='messageArea'>
                    {formattedMessages}
                </div>
                <div className='messagebox'>
                    <input className = 'typer' 
                        onKeyDown = {e => e.key.toLowerCase() === 'enter' || e.key.toLowerCase() === 'return' ? onSend() : ''} 
                        onChange={newToBeSent}
                        value={toBeSent}/>
                    <button className='send' onClick={onSend}>Send!</button>
                </div>
            </div>
        </div>
    );
}