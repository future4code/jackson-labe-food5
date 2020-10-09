import React, { useState, useEffect } from 'react';
import {Container, Logo, Title, Form} from './styled-signup-page';
import { Label } from '../../styles/molecules'
import { Button } from '../../styles/atoms'
import logo from '../../Img/logo-future-eats-color.png';
import { VisibilityIcon, VisibilityOffIcon } from '../../styles/atoms'
import api from "../../services/api.js;";

const body = {
	name: '',
	email: '',
	cpf: '',
	password: ''
}

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  
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
  

  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <Title> Cadastrar </Title>

      <Form>
        <Label htmlFor="name">
          <span>Nome*</span>
          <input
            id="name"
            type="text"
            placeholder="Nome e Sobrenome"
            required
          />
        </Label>

        <Label htmlFor="E-mail">
          <span>E-mail*</span>
          <input
            id="e-mail"
            type="email"
            placeholder="email@email.com"
            required
          />
        </Label>
        
        <Label htmlFor="CPF">
          <span>CPF*</span>
          <input
            id="CPF"
            type="text"
            placeholder="000.000.000-00"
            minLength="12"
            maxlength="15"
            required
          />
        </Label>

        <Label htmlFor="password">
          <span>Senha*</span>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Mínimo 6 caracteres"
            required
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
            minLength="12"
            required
          />
          {
            showPassword
              ? <VisibilityOffIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
              : <VisibilityIcon onClick={handlePasswordVisibility} color="#b8b8b8"/>
          }
        </Label>

        <Button type="submit">Criar</Button>
      </Form>

    </Container>
  );
}
}

export default SignUpForm;