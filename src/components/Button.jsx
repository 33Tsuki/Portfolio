import styles from './Button.module.css'

export default function Button({ href, children, variant = 'primary', ...props }) {
  const cls = `${styles.btn} ${styles[variant]}`
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
