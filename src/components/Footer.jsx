import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Misbahur Rahman</span>
        <span className={styles.copy}>© {new Date().getFullYear()} — All rights reserved.</span>
      </div>
    </footer>
  )
}
