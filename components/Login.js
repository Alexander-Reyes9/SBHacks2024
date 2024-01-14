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

    const logIn = async () => {
        /* 
        Get email and password from form
        json stringify it
        check if it is an entry in db
        create API endpoint getUser
        if it is, redirect user to chat page
        
        
        */
        // console.log(email);
        // const loginData = await fetch('/api', {body: JSON.stringify({email, password}), method:"POST"});
        // if (!loginData) {
        //     return alert('Username or password is incorrect.');
        // }

        // let client = await mongoclient.connect();
        // let db = client.db('SBHacks2024');
        // if (!db.collections('users').includes(loginData)) {
        //     return alert('Username or password is incorrect.');
        // }

        // console.log(req.body);

        // const data = JSON.parse(req.body);
    }

    return (
        <div>

            <label for="fname">Email</label><br/>
            <input type="text" id="email" name="email" onclick={setEmailProperly}/><br/>
            <label for="fname">Password</label><br/>
            <input type="text" id="password" name="password" onClick={setPasswordProperly}/><br/>
            <button className='button' id='button' onclick={logIn}>Login</button>

        </div>
    )
}

export default LoginPage;