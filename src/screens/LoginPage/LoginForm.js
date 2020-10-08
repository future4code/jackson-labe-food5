import React, { useState } from 'react';
import { 
  Form,
  VisibilityIcon,
  VisibilityOffIcon
} from './styled-login-page'
import { Label } from '../../styles/molecules'
import { Button } from '../../styles/atoms'
import useForm from './useForm'
import {useHistory} from 'react-router-dom'
import {login} from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, handleInputChange] = useForm({ email: '', password: ''})
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()
  
  const handlePasswordVisibility = () => {
    setShowPassword(state => !state)
  }

  const onClickLogin = (event) => {
    event.preventDefault()
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      login(form, history, setIsLoading)
    }
  }

  return (
    <Form id={'login_form'}>
        <Label htmlFor="email-login">
          <span>Email*</span>
          <input
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
            id="email-login"
            type="email"
            placeholder="email@email.com"
            required
            autoFocus
          />
        </Label>

        <Label htmlFor="password-login">
          <span>Senha*</span>
          <input
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            id="password-login"
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

        <Button 
        type="submit"
        onClick={onClickLogin}
        >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Entrar</>}
          </Button>
      </Form>
  );
};

export default LoginForm;