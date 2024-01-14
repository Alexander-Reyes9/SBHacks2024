import React from 'react'
import { useState } from 'react';

const LoginPage = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const setEmailProperly = (event) => {
        setEmail(event.target.value);
    }

    const setPasswordProperly = (event) => {
        setPassword(event.target.value);
    }

    const logIn = () => {
        fetch('/api/login', {
            body: JSON.stringify({email, password}),
            method:"POST"
        }).then(res => res.text())
        .then(id => {
            localStorage.setItem('userid', id);
            window.location.href = '/';
        }).catch(e => alert(e));
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