import React from 'react';
import styled from 'styled-components'
import { InnerScreen } from '../../styles/atoms';
import RegisterAdressForm from '../RegisterAdressPage/RegisterAdressForm'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AdressEditPage = () => {
  return (
    <InnerScreen>
      <Container>
        <RegisterAdressForm />
      </Container>
    </InnerScreen>
  );
}

export default AdressEditPage;