import { useState } from "react"

function useAuthentication() {
  const [token, setToken] = useState('')

  async function login({ email, password }) {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { email, password } }),
    })

    const data = await response.json()

    setToken(data.status.token)
  }



  return (
    { login, token }
  )
}

export default useAuthentication