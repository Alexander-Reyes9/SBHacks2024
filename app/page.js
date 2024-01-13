import styles from './globals.css'
import Navbar from '../components/Navbar'
import Register from '../components/Profile'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
    </main>
  )
}