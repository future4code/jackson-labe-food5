import React, {useState, useEffect} from 'react';
import { 
  Container,
  ImgContainer,
  ContainerRestaurant,
  SpanSubtitle,
  Circular,
} from './styled-restaurant-page'
import ImgRestaurante from '../../Img/hamburger-restaurante.jpg'
import CardProducts from './CardProducts'
import { InfoText, InnerScreen } from '../../styles/atoms';
import { useParams } from 'react-router-dom'
import useRequestData from '../../services/useRequestData'


const RestaurantPage = () => {
  const params = useParams()
  const [categorias, setCategorias] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const restaurant = useRequestData([], `/restaurants/${params.id}`, setIsLoading)
  
  
  const criarCategorias = () => {
    const category = []
    let unique = []
    restaurant && restaurant.products && restaurant.products.map((categoria) => {
      category.push(categoria.category)
      let unique = [...new Set(category)]; 
      setCategorias(unique)
    })
    
  }

  useEffect(()=>{
    criarCategorias()

  },[restaurant])


  return (
    <InnerScreen>
      {isLoading ? <Circular /> : <Container>
        <ImgContainer>
          <img src={restaurant.logoUrl} />
        </ImgContainer>
        <ContainerRestaurant>
          <p>{restaurant.name}</p>
          <h4>{restaurant.category}</h4>
          <InfoText>{restaurant.deliveryTime} min</InfoText>
          <InfoText>Frete: {restaurant.shipping},00</InfoText>
          <h4>{restaurant.address}</h4>
        </ContainerRestaurant>
        {categorias && categorias.map((item) => {
           return (
             <>
             <SpanSubtitle>{item}<p></p></SpanSubtitle>
             {categorias && restaurant.products.map((product) => {
               if(item === product.category){
                return (
                  <CardProducts 
                  name={product.name}
                  id={product.id}
                  description={product.description}
                  price={product.price}
                  photoUrl={product.photoUrl}
                  restaurant={restaurant}
                  />
                 )
               }
               
             })}
             </>
           )
        })}
        
      </Container> }
    </InnerScreen> 
)
}

export default RestaurantPage;

