import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'TuneSense',
    description:
      'An AI-powered music genre classifier using deep learning. Trained on spectrogram features via TensorFlow/Keras and Librosa, achieving 97% accuracy across 10 genres. Deployed as an interactive Streamlit web app.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Librosa', 'Streamlit'],
    github: 'https://github.com/misbah15667',
    demo: null,
  },
  {
    title: 'Cancer Margin Prediction',
    description:
      'Real-time intra-operative cancer margin prediction system developed during my internship at IDEAS TIH (DST–Govt. of India). Leverages SPiDr for spectroscopic data processing and ML inference during surgical procedures.',
    tech: ['Python', 'SPiDr', 'Data Analysis', 'Machine Learning'],
    github: 'https://github.com/33Tsuki/SPIDR-Frontend',
    demo: null,
  },
  {
    title: 'YouTube Clone',
    description:
      'A full-featured YouTube clone built with ReactJS, implementing core UX patterns: responsive sidebar navigation, video player, dynamic search, and category browsing. Demonstrates component architecture and API integration.',
    tech: ['ReactJS', 'JavaScript', 'CSS', 'REST API'],
    github: 'https://github.com/33Tsuki/project_youtube_clone',
    demo: null,
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <div className={styles.header}>
        <p className={styles.label}>Selected Work</p>
        <h2 className={styles.heading}>
          Projects that<br />
          <em>matter to me.</em>
        </h2>
      </div>
      <div className={styles.grid}>
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}
