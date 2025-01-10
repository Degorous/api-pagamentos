import styles from './Button.module.css'

function Button({ name, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{name}</p>
    </button>
  )
}

export default Button