import React, { useState } from 'react'
import { Form } from './styled-register-adress'
import { Button } from '../../styles/atoms'
import { Label } from '../../styles/molecules'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

const initialState = {
  street: '',
  number: '',
  neighbourhood: '',
  city: '',
  state: '',
  complement: ''
}

const RegisterAdressForm = () => {
    const history = useHistory()
    const [form, setForm] = useState(initialState)

    const handleSubmit = (e) => {
      e.preventDefault();

      const token = localStorage.getItem('token')

      api.put('/address', form, {
        headers: {
          auth: token
        }
      }).then(response => {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('token', response.data.token)
          history.push('/pagina-inicial')
        })
        .catch(error => {
          console.log(error)
          setForm(initialState)
        })
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(state => ({...state, [name]: value}))
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="logradouro">
          <span>Logradouro*</span>
          <input
            id="logradouro"
            name="street"
            type="text"
            placeholder="Rua / Av."
            value={form.street}
            onChange={handleChange}
            required
            autoFocus
          />
        </Label>

        <Label htmlFor="number-home">
          <span>Número*</span>
          <input
            id="number-home"
            name="number"
            type="number"
            placeholder="Número"
            value={form.number}
            onChange={handleChange}
            required
          />
        </Label>
        <Label htmlFor="complemento-home">
          <span>Complemento</span>
          <input
            id="complemento-home"
            name="complement"
            type="text"
            value={form.complement}
            onChange={handleChange}
            placeholder="Apto. / Bloco"
          />
        </Label>
        <Label htmlFor="bairro">
          <span>Bairro*</span>
          <input
            id="bairro"
            name="neighbourhood"
            type="text"
            placeholder="Bairro"
            value={form.neighbourhood}
            onChange={handleChange}
            required
          />
        </Label>
        <Label htmlFor="cidade">
          <span>Cidade*</span>
          <input
            id="cidade"
            name="city"
            type="text"
            placeholder="Cidade"
            value={form.city}
            onChange={handleChange}
            required
          />
        </Label>
        <Label htmlFor="estado">
          <span>Estado*</span>
          <input
            id="estado"
            name="state"
            type="text"
            value={form.state}
            onChange={handleChange}
            placeholder="Estado"
            required
          />
        </Label>

        <Button type="submit">Salvar</Button>
      </Form>
    )
}

export default RegisterAdressForm
