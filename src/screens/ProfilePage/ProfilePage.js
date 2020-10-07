import React from 'react';
import {
  Header,
  Container,
  PersonalInfoContainer,
  AddressContainer,
  HistoryContainer,
  RestaurantCard,
  StyledLink
} from './styles'
import { MdEdit } from 'react-icons/md'

const ProfilePage = () => {
  return (
    <>
      <Header>Meu perfil</Header>
      
      <Container>
        <PersonalInfoContainer>
          <div>
            <div style={{marginBottom: "8px"}}>Bruna Oliveira</div>
            <div style={{marginBottom: "8px"}}>bruna_o@gmail.com</div>
            <div>333.333.333-33</div>
          </div>
          <StyledLink to="/editar-dados-pessoais">
            <MdEdit fontSize="24px"/>
          </StyledLink>
        </PersonalInfoContainer>
      
        <AddressContainer>
          <div>
            <div style={{color: '#b8b8b8', marginBottom: "8px"}}>Endereço Cadastrado</div>
            <div>Rua Alessandra Vieira, 42 - Santana</div>
          </div>
          <StyledLink to="/editar-endereco">
            <MdEdit fontSize="24px"/>
          </StyledLink>
        </AddressContainer>

        <HistoryContainer>
          <h3>Histórico de Pedidos</h3>
          <RestaurantCard>
            <span>Bullguer Vila Madalena</span>
            <span>23 de outubro de 2019</span>
            <span>SUBTOTAL R$67,00</span>
          </RestaurantCard>
          <RestaurantCard>
            <span>Bullguer Vila Madalena</span>
            <span>23 de outubro de 2019</span>
            <span>SUBTOTAL R$67,00</span>
          </RestaurantCard>
          <RestaurantCard>
            <span>Bullguer Vila Madalena</span>
            <span>23 de outubro de 2019</span>
            <span>SUBTOTAL R$67,00</span>
          </RestaurantCard>
        </HistoryContainer>
      </Container>
    </>
  );
}

export default ProfilePage;