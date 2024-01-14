import React from 'react'
import { useState } from 'react';

const SignUpPage = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [verifyPassword, setVerifyPassword] = useState('');

    const signUp = async () => {
        if (password.length < 3) return alert('Password is too short.');
        
        if (!email.includes('.edu')) return alert('Not a college email');

        if (password !== verifyPassword) return alert('Passwords are not the same');
        
        await fetch('/api/testMongo', {body: {email, password}, method:"POST"});
    }

  return (
    <div>

        <label for="fname">Email</label><br/>
        <input type="text" id="email" name="email" onChange={setEmail}/><br/>
        <label for="fname">Password</label><br/>
        <input type="password" id="password" name="password" onChange={setPassword}/><br/>
        <label for="fname">Verify Password</label><br/>
        <input type="password" id="password" name="verify-password" onChange={setVerifyPassword}/><br/>
        <button className='button' id='button' onClick={signUp}>Sign Up</button>

    </div>
  )
}

export default SignUpPage;