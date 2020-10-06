import React from 'react';
import { 
  Container,
  Title,
  Form,
  Label,
  Button,
  Bar,
  BackIcon,
  Black,
} from './styled-register-adress'
import RegisterAdressForm from './RegisterAdressForm'
import {goBack} from '../../navigation/Coordinator'
import {useHistory} from 'react-router-dom'

const RegisterAdressPage = () => {
  const history = useHistory()
  return (
    <Container>
      <Bar>
        <Black></Black>
        <BackIcon onClick={() => goBack(history)}></BackIcon>
      </Bar>
      <Title>Meu endereço</Title>
      <RegisterAdressForm />
    </Container>
  );
}

export default RegisterAdressPage;