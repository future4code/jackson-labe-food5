import React, {useEffect, useState} from 'react';
import { InfoText, InnerScreen } from '../../styles/atoms';
import { UserAdressContainer,
  PaymentMethodContainer,
  RestaurantInfoContainer,
  SubInfos,
  SubtotalInfo,
  PaymentOptionsContainer,
  ConfirmButton, CartContainer
} from './styled-cart-page';
import OrderCard from './OrderCard';
import { useCart } from '../../contexts/shoppingCart'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'
import {goToHomepage} from '../../navigation/Coordinator'

const Cart = () => {
  const { cart } = useCart()
  const history = useHistory()
  const [ paymentOption, setPaymentOption ] = useState("")

  const handlePaymentMethod = (event) => {
    setPaymentOption(event.target.value)
  }

  const calculateSubtotal = () => {
    if (cart.length > 0) {
      const freight = cart[0].restaurant.shipping

      return cart.reduce((total, product) => {
        return total + product.price * product.quantity 
      }, 0) + freight;
    }

    return 0
  }

  const onClickConfirm = () => {
    const body = {
      products: cart.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity
        }
      }),
      paymentMethod: paymentOption
    }
    console.log(body)
    if(cart.length > 0) {
      const config = {headers: {auth: localStorage.getItem('token')}}

    api.post(`/restaurants/${cart[0].restaurant.id}/order`, body, config)
    .then((response) => {
      alert(`pedido realizado com sucesso, por favor aguardar a entrega`)
      goToHomepage(history)
    })
    .catch((error) => {
      alert("carrinho vazio")
    })
    }else {
      alert("carrinho vazio")
    }
    
  }

  return (
    <InnerScreen>
      <UserAdressContainer>
        <InfoText>Endereço de entrega</InfoText>
        <p>{JSON.parse(localStorage.getItem('user')).address}</p>
      </UserAdressContainer>
      <CartContainer>
        <RestaurantInfoContainer>
          <span style={{color: "#e86e5a"}}>{cart[0] && cart[0].restaurant.name}</span>
          <InfoText>{cart[0] && cart[0].restaurant.address}</InfoText>
          {cart[0] ? <InfoText>{cart[0] && cart[0].restaurant.deliveryTime} min</InfoText> : <></>}
        </RestaurantInfoContainer>
        {cart.map(item => (
          <OrderCard key={item.id} item={item}/>
        ))}
        <SubInfos>
          <p style={{textAlign: "right"}}>Frete R${cart[0] && cart[0].restaurant.shipping},00</p>
          <SubtotalInfo>
            <span>SUBTOTAL</span>
            <span style={{color: "#e86e5a"}}>R${calculateSubtotal().toFixed(2).replace(".", ",")}</span>
          </SubtotalInfo>
        </SubInfos>
        <PaymentMethodContainer>
          <p>Forma de pagamento</p>
          <PaymentOptionsContainer onChange={handlePaymentMethod}>
            <label>
              <input type="radio" name="choice" value="money" /> Dinheiro
            </label>
            <label>
              <input type="radio" name="choice" value="creditcard" /> Cartão de crédito
            </label>
          </PaymentOptionsContainer>
        </PaymentMethodContainer>
        <ConfirmButton onClick={onClickConfirm}>Confirmar</ConfirmButton>
      </CartContainer>
    </InnerScreen>
  );
}

export default Cart;