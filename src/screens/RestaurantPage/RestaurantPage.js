import React from 'react';
import { 
  Container,
  Title,
  Button,
  Bar,
  BackIcon,
  Black,
  ImgContainer,
  ContainerRestaurant,
  SpanSubtitle,
} from './styled-restaurant-page'
import {goBack} from '../../navigation/Coordinator'
import {useHistory} from 'react-router-dom'
import ImgRestaurante from '../../Img/hamburger-restaurante.jpg'
import CardProducts from './CardProducts'

const RestaurantPage = () => {
  const history = useHistory()

  return (
    <Container>
    <Bar>
      <Black></Black>
      <BackIcon onClick={() => goBack(history)}></BackIcon>
      <span>Restaurante</span>
    </Bar>
    <ImgContainer>
      <img src={ImgRestaurante} />
    </ImgContainer>
    <ContainerRestaurant>
      <p>Restaurante Vila Madalena</p>
      <h4>Burger</h4>
      <span>50 - 60 min</span>
      <span>Frete: 6,00</span>
      <h4>R. Fradique Coutinho, 1136 - Vila Madalena</h4>
    </ContainerRestaurant>
    <SpanSubtitle>Principais<p></p></SpanSubtitle>
    <CardProducts />
  </Container>
);
}

export default RestaurantPage;