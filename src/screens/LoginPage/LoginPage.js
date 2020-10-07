import React from 'react';
import { 
  Container,
  Logo,
  Title,
  StyledLink,
} from './styled-login-page'
import LoginForm from './LoginForm'
import logo from '../../Img/logo-future-eats-color.png'

const LoginPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />

      <Title>Entrar</Title>

      <LoginForm />

      <StyledLink to="/cadastro">Não possui cadastro? Clique aqui</StyledLink>
    </Container>
  );
}

export default LoginPage;