import styles from './FormLogin.module.css'
import TextField from "../TextField"
import Button from "../Button"
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { TokenContext } from '../../context/Token'

function FormLogin() {

  const [formData, setFormData] = useState(
    {
      email: '',
      password: ''
    }
  )

  const { login } = useContext(TokenContext)

  const navigate = useNavigate()

  async function onSubmit(event) {
    event.preventDefault()

    login(formData)

    navigate("/payments")
  }

  return (
    <section className={styles.container}>
      <h1>Faça o Login</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <TextField
          label="Email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        <TextField
          label="Senha"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
        />
        <Button name="Entrar"></Button>
      </form>
    </section>
  )
}

export default FormLogin