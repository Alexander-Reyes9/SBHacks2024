import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className='navbar'>
        <ul>
          <a>Home</a>
          <a></a>
          <a>Login/Signup</a>
          <a></a>
        </ul>
      </nav>
      <div>
        <p></p>
      </div>
    </main>
  )
}
