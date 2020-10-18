import React, { useState, useEffect } from 'react';
import {Container, Logo, Title, Form} from './styled-signup-page';
import { Label } from '../../styles/molecules'
import { Button } from '../../styles/atoms'
import logo from '../../Img/logo-future-eats-color.png';
import { VisibilityIcon, VisibilityOffIcon } from '../../styles/atoms'
import api from "../../services/api.js";
import useForm from '../LoginPage/useForm'
import {useHistory} from 'react-router-dom'
import {signUp} from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress'

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()
  const [form, handleInputChange] = useForm({name: '', email: '', password: '', cpf: ""})
  const [confimPassword, setComfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const handlePasswordVisibility = () => {
    setShowPassword(state => !state)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      api.post('/singup', {
        headers: {
          
        }
      })
    }
  }) 

  const handlePassword = (event) =>{
    setComfirmPassword(event.target.value)
  }
  
  const onClickSignUp = (event) => {
    event.preventDefault()
    const element = document.getElementById('signup_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if(form.password === confimPassword) {
      if (isValid) {
        signUp(form, history, setIsLoading)
      }
    }else {
     alert('senhas diferentes, por favor verifique sua senha')
    }
    
  }

  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <Title> Cadastrar </Title>

      <Form id={'signup_form'}>
        <Label htmlFor="name">
          <span>Nome*</span>
          <input
            id="name"
            type="text"
            placeholder="Nome e Sobrenome"
            required
            autoFocus
            name='name'
            onChange={handleInputChange}
            value={form.name}
          />
        </Label>

        <Label htmlFor="E-mail">
          <span>E-mail*</span>
          <input
            id="e-mail"
            type="email"
            placeholder="email@email.com"
            required
            name='email'
            onChange={handleInputChange}
            value={form.email}
          />
        </Label>
        
        <Label htmlFor="CPF">
          <span>CPF*</span>
          <input
            id="CPF"
            type="cpf"
            placeholder="000.000.000-00"
            minLength="12"
            maxlength="15"
            required
            name='cpf'
            onChange={handleInputChange}
            value={form.cpf}
          />
        </Label>

        <Label htmlFor="password">
          <span>Senha*</span>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mínimo 6 caracteres"
            required
            minLength="6"
            name='password'
            onChange={handleInputChange}
            value={form.password}
          />
          {
            showPassword
              ? <VisibilityOffIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
              : <VisibilityIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
          }
        </Label>

        <Label htmlFor="confirm">
          <span>Confirmar*</span>
          <input
            id="confirm"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirme a senha anterior"
            minLength="6"
            required
            name='password'
            onChange={handlePassword}
            value={confimPassword}
          />
          {
            showPassword
              ? <VisibilityOffIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
              : <VisibilityIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
          }
        </Label>

        <Button 
        type="submit"
        onClick={onClickSignUp}
        >
         {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Criar</>}
          </Button>
      </Form>

    </Container>
  );
}

export default SignUpForm;