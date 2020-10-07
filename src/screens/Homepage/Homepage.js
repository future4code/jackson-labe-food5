import React from 'react';
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
  RestaurantName, SubInfos, DeliveryTime, Freight 
} from './styled-homepage'
import healthy from '../../Img/healthy-food.jpg'
import { DescriptionText, InnerScreen } from '../../styles/atoms';

const Homepage = () => {
  return (
    <InnerScreen>
      <HomepageContainer>
        <UserHandleContainer>
          <SearchContainer>
            <SearchIcon/>
            <SearchInput placeholder={"Restaurante"}/>
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
            <RestaurantImage src={healthy}/>
            <RestaurantName>Bullguer Eldorado</RestaurantName>
            <SubInfos>
              <DescriptionText>50 - 60 min</DescriptionText>
              <DescriptionText>Frete R$6,00</DescriptionText>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
            <RestaurantName>Vinil Butantã</RestaurantName>
            <SubInfos>
              <DescriptionText>50 - 60 min</DescriptionText>
              <DescriptionText>Frete R$6,00</DescriptionText>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
            <RestaurantName>Juicy Burguer</RestaurantName>
            <SubInfos>
              <DescriptionText>50 - 60 min</DescriptionText>
              <DescriptionText>Frete R$6,00</DescriptionText>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
          </RestaurantCard> 
        </RestaurantContainer>
      </HomepageContainer> 
    </InnerScreen>
  );
}

export default Homepage;