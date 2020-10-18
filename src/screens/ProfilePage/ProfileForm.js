import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../styles/atoms';
import { Label } from '../../styles/molecules'
import CircularProgress from '@material-ui/core/CircularProgress'
import api from '../../services/api'


const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const initialState = {
  name: '',
  email: '',
  cpf: ''
}

const ProfileForm = () => {
  const history = useHistory()
  const [form, setForm] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem('token')
    const config = { headers: { auth: token }}

    api.get('/profile', config)
      .then(response => {
        const {name, email, cpf} = response.data.user
        setForm({name, email, cpf})
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error)
        setForm(initialState)
        setIsLoading(false)
      })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm((state) => ({...state, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)
    const token = localStorage.getItem('token')
    const config = { headers: { auth: token }}

    api.put('/profile', form, config)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setIsLoading(false)
        history.goBack()
      })
      .catch(error => {
        alert("Erro na requisição")
        setForm(initialState)
        setIsLoading(false)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">
          <span>Nome*</span>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome e Sobrenome"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Label htmlFor="E-mail">
          <span>E-mail*</span>
          <input
            id="e-mail"
            name="email"
            type="email"
            placeholder="email@email.com"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </Label>
        
        <Label htmlFor="CPF">
          <span>CPF*</span>
          <input
            id="CPF"
            name="cpf"
            type="text"
            placeholder="000.000.000-00"
            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
            value={form.cpf}
            onChange={handleInputChange}
            required
          />
        </Label>

        <Button type="submit">{isLoading ? <CircularProgress color={'inherit'} size={24}/> : 'Salvar'}</Button>
      </Form>
  );
};

export default ProfileForm;