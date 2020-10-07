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
  SubInfos
} from './styled-homepage'
import healthy from '../../Img/healthy-food.jpg'
import { InfoText, InnerScreen, RestaurantName } from '../../styles/atoms';

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
              <InfoText>50 - 60 min</InfoText>
              <InfoText>Frete R$6,00</InfoText>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
            <RestaurantName>Vinil Butantã</RestaurantName>
            <SubInfos>
              <InfoText>50 - 60 min</InfoText>
              <InfoText>Frete R$6,00</InfoText>
            </SubInfos>
          </RestaurantCard>
          <RestaurantCard>
            <RestaurantImage src={healthy}/>
            <RestaurantName>Juicy Burguer</RestaurantName>
            <SubInfos>
              <InfoText>50 - 60 min</InfoText>
              <InfoText>Frete R$6,00</InfoText>
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