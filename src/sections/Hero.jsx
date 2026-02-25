import Button from '../components/Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} reveal reveal-1`}>Available for opportunities</p>
        <h1 className={`${styles.name} reveal reveal-2`}>
          Misbahur<br />
          <em>Rahman</em>
        </h1>
        <p className={`${styles.tagline} reveal reveal-3`}>
          Full Stack Developer &amp; AI Enthusiast
        </p>
        <p className={`${styles.sub} reveal reveal-4`}>
          Building intelligent systems and modern web experiences.<br />
          B.Tech CSE, KIIT University · Data Analyst Intern @ IDEAS TIH (ISI, Kolkata)
        </p>
        <div className={`${styles.cta} reveal reveal-5`}>
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="outline">Get in Touch</Button>
        </div>
      </div>
      <div className={styles.decoration} aria-hidden="true">
        <span className={styles.circle} />
        <span className={styles.line} />
      </div>
    </section>
  )
}
