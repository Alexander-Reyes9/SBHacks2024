import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';

const SignUpPage = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [verifyPassword, setVerifyPassword] = useState('');

    const setEmailProperly = (event) => {
        setEmail(event.target.value);
    }

    const setPasswordProperly = (event) => {
        setPassword(event.target.value);
    }

    const verifyPasswordProperly = (event) => {
        setVerifyPassword(event.target.value);
    }

    const signUp = async () => {

        console.log(email);

        if (password.length < 3) return alert('Password is too short.');
        
        if (!email.endsWith('.edu')) return alert('Not a college email');

        if (password !== verifyPassword) return alert('Passwords are not the same');
        
        fetch('/api/signup', {body: JSON.stringify({email, password}), method:"POST"})
          .then(res => res.text())
          .then(id => {
            localStorage.setItem('userid', id);
            window.location.href = "/profile?newUser=true";
          }).catch(e => {
            alert(`There's been an error: ${e}`);
            console.error(e);
          })
        
    }

  return (
    <div>

        <label>Email</label><br/>
        <input type="email" id="email" name="email" onChange={setEmailProperly}/><br/>
        <label>Password</label><br/>
        <input type="password" id="password" name="password" onChange={setPasswordProperly}/><br/>
        <label>Verify Password</label><br/>
        <input type="password" id="password" name="verify-password" onChange={verifyPasswordProperly}/><br/>
        <button className='button' id='button' onClick={signUp}>Sign Up</button>

    </div>
  )
}

export default SignUpPage;