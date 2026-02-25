import styles from './Section.module.css'

export default function Section({ id, children, alt = false }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`}>
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  )
}
