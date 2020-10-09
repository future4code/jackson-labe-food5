import React, {useState, useEffect} from 'react';
import {
  Container,
  PersonalInfoContainer,
  AddressContainer,
  HistoryContainer,
  RestaurantCard,
  StyledLink,
  StyledProgress
} from './styles'
import { MdEdit } from 'react-icons/md'
import { InnerScreen } from '../../styles/atoms';
import api from '../../services/api'

const ProfilePage = () => {
  const [user, setUser] = useState({})
  const [orders, setOrders] = useState([])
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const [isLoadingOrders, setIsLoadingOrders] = useState(false)

  useEffect(() => {
    setIsLoadingUser(true)
    const token = localStorage.getItem('token')
    const config = {
      headers: { auth: token }
    }

    api.get('/profile', config)
      .then(response => {
        setUser(response.data.user)
        setIsLoadingUser(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoadingUser(false)
      })
  }, [])
  
  useEffect(() => {
    setIsLoadingOrders(true)
    const token = localStorage.getItem('token')
    const config = {
      headers: { auth: token }
    }

    api.get('/orders/history', config)
      .then(response => {
        setOrders(response.data.orders)
        setIsLoadingOrders(false)
      })
      .catch(error => {
        console.log(error)
        setIsLoadingOrders(false)
      })
  }, [])

  return (
    <InnerScreen>
      <Container>
      {
        isLoadingUser || isLoadingOrders ? <StyledProgress color="secondary"/> :
        <>
          <PersonalInfoContainer>
            <div>
              <div style={{marginBottom: "8px"}}>{user.name}</div>
              <div style={{marginBottom: "8px"}}>{user.email}</div>
              <div>{user.cpf}</div>
            </div>
            <StyledLink to="/editar-dados-pessoais">
              <MdEdit fontSize="24px"/>
            </StyledLink>
          </PersonalInfoContainer>
        
          <AddressContainer>
            <div>
              <div style={{color: '#b8b8b8', marginBottom: "8px"}}>Endereço Cadastrado</div>
              <div>{user.address}</div>
            </div>
            <StyledLink to="/editar-endereco">
              <MdEdit fontSize="24px"/>
            </StyledLink>
          </AddressContainer>

          <HistoryContainer>
            <h3>Histórico de Pedidos</h3>
            {
              orders.length > 0
                ? orders.map((order, i) => (
                  <RestaurantCard key={i}>
                    <span>{order.restaurantName}</span>
                    <span>{(new Date(order.createdAt).toLocaleDateString('pt-BR', {day:'numeric', month: 'long', year: 'numeric'}))}</span>
                    <span>SUBTOTAL R${order.totalPrice},00</span>
                  </RestaurantCard>
                ))
                : <p style={{alignSelf: "center"}}>Você não realizou nenhum pedido</p> 
            }
          </HistoryContainer>
        </>
      }
      </Container>
    </InnerScreen>
  );
}

export default ProfilePage;