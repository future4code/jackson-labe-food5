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
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
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
        const categoriesSet = new Set();
        response.data.restaurants.forEach(restaurant => {
          categoriesSet.add(restaurant.category);
        })
        
        setRestaurants(response.data.restaurants)
        setCategories([...categoriesSet])
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

  const handleCategoryClick = (category) => {
    setCurrentCategory(category)
  }

  const filteredRestaurants = () => {
    return (
      restaurants
      .filter((restaurant) => (
        restaurant.name.toLowerCase().includes(searchInput.toLowerCase()) && (!currentCategory || restaurant.category === currentCategory)
      ))
    )
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
            {categories.map((category, i) => (
              <FilterSpan
                key={i}
                isActive={currentCategory === category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </FilterSpan>
            ))}
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
}

export default Homepage;