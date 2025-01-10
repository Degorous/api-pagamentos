import { CardPayment } from '@mercadopago/sdk-react'
import styles from './Payment.module.css'
import usePayment from '../../hooks/usePayment';
import { useState } from 'react';
import Button from '../../components/Button';
import NumberField from '../../components/NumberField';


function Payment() {

  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(true)
  const { createPayment } = usePayment()

  async function onSubmit(params) {
    createPayment({
      name: params.payer.email,
      token: params.token,
      amount: params.transaction_amount
    })
  }

  if (loading) {
    return (
      <>
        <NumberField label="Valor" placeholder="Digite o valor" onChange={(event) => setValue(event.target.value)} />
        <Button name='Enviar' onClick={() => setLoading(false)} />
      </>
    )
  }

  return (
    <div className={styles.container}>
      <h1>
        Pagamentos
      </h1>
      <CardPayment
        locale='pt-BR'
        initialization={{ amount: Number(value) }}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Payment