import React from 'react';
import { 
  Container,
  ImgContainer,
  ContainerRestaurant,
  SpanSubtitle,
} from './styled-restaurant-page'
import ImgRestaurante from '../../Img/hamburger-restaurante.jpg'
import CardProducts from './CardProducts'
import { InfoText, InnerScreen } from '../../styles/atoms';

const RestaurantPage = () => {

  return (
    <InnerScreen>
      <Container>
        <ImgContainer>
          <img src={ImgRestaurante} />
        </ImgContainer>
        <ContainerRestaurant>
          <p>Restaurante Vila Madalena</p>
          <h4>Burger</h4>
          <InfoText>50 - 60 min</InfoText>
          <InfoText>Frete: 6,00</InfoText>
          <h4>R. Fradique Coutinho, 1136 - Vila Madalena</h4>
        </ContainerRestaurant>
        <SpanSubtitle>Principais<p></p></SpanSubtitle>
        <CardProducts />
      </Container>
    </InnerScreen>
);
}

export default RestaurantPage;