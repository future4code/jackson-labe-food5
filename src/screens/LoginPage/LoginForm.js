import React, { useState } from 'react';
import { 
  Form,
  VisibilityIcon,
  VisibilityOffIcon
} from './styled-login-page'
import { Label } from '../../styles/molecules'
import { Button } from '../../styles/atoms'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  
  const handlePasswordVisibility = () => {
    setShowPassword(state => !state)
  }

  return (
    <Form>
        <Label htmlFor="email-login">
          <span>Email*</span>
          <input
            id="email-login"
            type="email"
            placeholder="email@email.com"
            required
          />
        </Label>

        <Label htmlFor="password-login">
          <span>Senha*</span>
          <input
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

        <Button type="submit">Entrar</Button>
      </Form>
  );
};

export default LoginForm;