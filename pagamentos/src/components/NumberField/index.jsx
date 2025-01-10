import styles from './NumberField.module.css'

function NumberField({ label, placeholder, value, onChange }) {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input placeholder={placeholder} required type='number' value={value} onChange={onChange}></input>
    </div>
  )
}

export default NumberField