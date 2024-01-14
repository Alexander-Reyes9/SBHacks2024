import React from 'react'
import handler from '../pages/api/database';
import styles from '../app/globals.css'

const LoginPage = () => {

    return (
        <div>

            <label for="fname">Email</label><br/>
            <input type="text" id="email" name="email"/><br/>
            <label for="fname">Password</label><br/>
            <input type="text" id="password" name="password"/><br/>
            <label for="fname">Verify Password</label><br/>
            <input type="text" id="password" name="password"/><br/>
            <button className='button' id='button' onclick={handler}>Login</button>

        </div>
    )
}

export default LoginPage;