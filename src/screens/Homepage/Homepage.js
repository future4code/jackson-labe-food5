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
import { useHistory } from 'react-router-dom';
import {goToRestaurantPage} from '../../navigation/Coordinator'

const Homepage = () => {
  const history = useHistory()
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')

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

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const filteredRestaurants = () => {
    return restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchInput.toLowerCase()))
  }

  return (
    <InnerScreen>
      <HomepageContainer>
        <UserHandleContainer>
          <SearchContainer>
            <SearchIcon/>
            <SearchInput
              value={searchInput}
              onChange={handleSearchInputChange}
              placeholder={"Restaurante"}
            />
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
            : (filteredRestaurants().length > 0 
                ? filteredRestaurants()
                  .map((restaurant) => (
                  <RestaurantCard key={restaurant.id} onClick={() => goToRestaurantPage(history, restaurant.id)}>
                    <RestaurantImage src={restaurant.logoUrl} alt="restaurant" />
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <SubInfos>
                      <InfoText>{restaurant.deliveryTime} min</InfoText>
                      <InfoText>Frete R${restaurant.shipping},00</InfoText>
                    </SubInfos>
                  </RestaurantCard>))
                : <p>Não encontramos {":("}</p> 
            )
          }
        </RestaurantContainer>
      </HomepageContainer> 
    </InnerScreen>
  );
};

export default HomePage;
