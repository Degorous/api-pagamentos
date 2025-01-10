import { useContext } from "react"
import { TokenContext } from "../context/Token"

function usePayment() {
  const { token: authToken } = useContext(TokenContext)


  async function createPayment({ name, token, amount }) {
    const response = await fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          payment: {
            name: name,
            token: token,
            amount: amount
          }
        }
      )
    })

    return await response.json()
  }

  return (
    { createPayment }
  )
}

export default usePayment