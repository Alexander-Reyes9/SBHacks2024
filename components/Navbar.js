import React from 'react'
import Link from 'next/link';
import styles from '../app/globals.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul><Link href="/">Home</Link></ul>
      <ul><Link href="/profile">Profile</Link></ul>
      <ul><Link href="/chat">Chat</Link></ul>
      <ul><Link href="/login">Login</Link></ul>
    </div>
  );
}

export default Navbar;