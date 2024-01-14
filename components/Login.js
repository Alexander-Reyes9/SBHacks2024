import React from 'react'
import { useState } from 'react';
import mongoclient from '../lib/mongodb';

const LoginPage = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const setEmailProperly = (event) => {
        setEmail(event.target.value);
    }

    const setPasswordProperly = (event) => {
        setPassword(event.target.value);
    }

    const logIn = async () => {
        console.log(email);

        await fetch('/api/login', {body: JSON.stringify({email, password}), method:"GET"});  
    }
    

    return (
        <div>
        
            <label>Email</label><br/>
            <input type="text" id="email" name="email" onClick={setEmailProperly}/><br/>
            <label>Password</label><br/>
            <input type="text" id="password" name="password" onClick={setPasswordProperly}/><br/>

            <button className='button' id='button' onClick={logIn}>Login</button>

        </div>
    )
}

export default LoginPage;