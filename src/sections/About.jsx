import Section from '../components/Section'
import styles from './About.module.css'

const skills = {
  'Frontend': ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Streamlit'],
  'Backend': ['Node.js', 'Express', 'MongoDB', 'Python', 'C++'],
  'Tools & Platforms': ['Git', 'Docker', 'VS Code', 'PowerShell', 'SolarWinds'],
  'AI / Data': ['TensorFlow', 'Keras', 'Librosa', 'SPiDr', 'Data Analysis'],
}

export default function About() {
  return (
    <Section id="about" alt>
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.label}>About</p>
          <h2 className={styles.heading}>
            Developer with a<br />
            <em>curiosity for AI.</em>
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.bio}>
            I'm a final-year Computer Science student at KIIT University with hands-on experience
            in both full stack development and machine learning. I've interned at Linde Global
            Support, where I automated system monitoring workflows using PowerShell and SolarWinds,
            and I'm currently a Data Analyst Trainee at IDEAS Technology Innovation Hub (ISI, Kolkata)
            — a DST Government of India initiative — working on real-time cancer margin prediction.
          </p>
          <p className={styles.bio}>
            I enjoy the intersection of clean engineering and intelligent systems. Whether it's
            deploying a deep learning audio classifier or building a YouTube clone from scratch,
            I care about the details.
          </p>
          <div className={styles.skills}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{category}</h3>
                <ul className={styles.skillList}>
                  {items.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
