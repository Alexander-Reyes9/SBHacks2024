import styles from './globals.css'
import Navbar from '../components/Navbar'
import Register from '../components/Profile'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='content'>
      <Navbar />
      <div>
      <center>
        <p>
          Welcome to CollegeConnector! <Link href='/login'>Login</Link> to get started.
        </p>
        <p>
          Meet other college students who have similar interests
          and strike up a conversation!
        </p>
        <img src='Logo_t.png' alt='logo' width="50%"/>
        </center>
      </div>
    </main>
  )
}