import styles from './TextField.module.css'

function TextField({ label, placeholder, value, onChange }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input placeholder={placeholder} required value={value} onChange={onChange}></input>
    </div>
  )
}

export default TextField