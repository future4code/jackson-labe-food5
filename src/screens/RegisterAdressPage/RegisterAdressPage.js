import React from 'react';
import { Container, Title, } from './styled-register-adress'
import RegisterAdressForm from './RegisterAdressForm'
import { InnerScreen } from '../../styles/atoms';

const RegisterAdressPage = () => {
  return (
    <InnerScreen>
      <Container>
        <Title>Meu endereço</Title>
        <RegisterAdressForm />
      </Container>
    </InnerScreen>
  );
}

export default RegisterAdressPage;