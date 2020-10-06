import React from 'react';
import { 
  Container,
  Logo,
  Title,
  Form,
  Label,
  Button,
  StyledLink,
} from './styled-login-page'
import logo from '../../Img/logo-future-eats-color.png'

const LoginPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <Title>Entrar</Title>

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
            type="password"
            placeholder="Mínimo 6 caracteres"
            required
          />
        </Label>

        <Button type="submit">Entrar</Button>
      </Form>

      <StyledLink to="/cadastro">Não possui cadastro? Clique aqui</StyledLink>
    </Container>
  );
}

export default LoginPage;