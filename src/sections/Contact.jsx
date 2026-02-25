import Section from '../components/Section'
import styles from './Contact.module.css'

const contacts = [
  {
    label: 'Email',
    value: 'misbah15667@gmail.com',
    href: 'mailto:misbah15667@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/misbahur-rahman',
    href: 'https://www.linkedin.com/in/misbahur-rahman-48b621249/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/misbah15667',
    href: 'https://github.com/33Tsuki',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <Section id="contact" alt>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.heading}>
            Let's build<br />
            <em>something together.</em>
          </h2>
          <p className={styles.sub}>
            I'm open to internships, full-time roles, and interesting freelance projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>
        </div>
        <ul className={styles.list}>
          {contacts.map(({ label, value, href, icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={styles.item}>
                <span className={styles.itemIcon}>{icon}</span>
                <span className={styles.itemInfo}>
                  <span className={styles.itemLabel}>{label}</span>
                  <span className={styles.itemValue}>{value}</span>
                </span>
                <svg className={styles.arrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
