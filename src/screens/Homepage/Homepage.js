import React, { useState, useEffect } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress'
import { InfoText, InnerScreen, RestaurantName } from '../../styles/atoms';
import api from '../../services/api'

const Homepage = () => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    const token = localStorage.getItem('token') 

    api.get('/restaurants', {
      headers: {
        auth: token
      }
    })
      .then(response => {
        setRestaurants(response.data.restaurants)
        setIsLoading(false)
      })
      .catch(error => {
        alert('Erro na requisição')
        setIsLoading(false)
      })
  }, [])


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
          {
            isLoading
            ? <CircularProgress color='secondary' size={24}/>
            : (restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id}>
                <RestaurantImage src={restaurant.logoUrl} alt="restaurant" />
                <RestaurantName>{restaurant.name}</RestaurantName>
                <SubInfos>
                  <InfoText>{restaurant.deliveryTime} min</InfoText>
                  <InfoText>Frete R${restaurant.shipping},00</InfoText>
                </SubInfos>
              </RestaurantCard>
            )))
          }
        </RestaurantContainer>
      </HomepageContainer> 
    </InnerScreen>
  );
}

export default Homepage;