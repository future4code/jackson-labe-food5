import React from 'react';
import { ImageLogo } from './styled-homepage';
const logo = require('../../img/logo.png');
import healthy from '../../Img/healthy-food.jpg';
import {
  HomepageContainer,
  SearchIcon,
  SearchInput,
  SearchContainer,
  FilterContainer,
  FilterSpan,
  RestaurantCard,
  RestaurantContainer,
  RestaurantImage,
  UserHandleContainer,
  RestaurantName,
  SubInfos,
  DeliveryTime,
  Freight,
} from './styled-homepage';

const HomePage = () => {
  return (
    <div>
      <ImageLogo src={logo} />
      <HomepageContainer>
        <UserHandleContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder={'Restaurante'} />
          </SearchContainer>
          <FilterContainer>
            <FilterSpan>Burger</FilterSpan>
            <FilterSpan>Asiática</FilterSpan>
            <FilterSpan>Massas</FilterSpan>
            <FilterSpan>Saudáveis</FilterSpan>
            <FilterSpan>Vegano</FilterSpan>
          </FilterContainer>
        </UserHandleContainer>
        <RestaurantContainer>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
            <RestaurantName>Bullguer Eldorado</RestaurantName>
            <SubInfos>
              <DeliveryTime>50 - 60 min</DeliveryTime>
              <Freight>Frete R$6,00</Freight>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
            <RestaurantName>Vinil Butantã</RestaurantName>
            <SubInfos>
              <DeliveryTime>50 - 60 min</DeliveryTime>
              <Freight>Frete R$6,00</Freight>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
            <RestaurantName>Juicy Burguer</RestaurantName>
            <SubInfos>
              <DeliveryTime>50 - 60 min</DeliveryTime>
              <Freight>Frete R$6,00</Freight>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy} />
          </RestaurantCard>
        </RestaurantContainer>
      </HomepageContainer>
    </div>
  );
};

export default HomePage;
