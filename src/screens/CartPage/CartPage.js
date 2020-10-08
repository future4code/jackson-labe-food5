import React, {useEffect} from 'react';
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

const Cart = () => {
  const { cart } = useCart()

  return (
    <InnerScreen>
      <UserAdressContainer>
        <InfoText>Endereço de entrega</InfoText>
        <p>Rua Alessandra Vieira, 42</p>
      </UserAdressContainer>
      <CartContainer>
        <RestaurantInfoContainer>
          <span style={{color: "#e86e5a"}}>Bullger Eldorado</span>
          <InfoText>R. Fradique Coutinho, 1136 - Vila Madalena</InfoText>
          <InfoText>30 - 45 min</InfoText>
        </RestaurantInfoContainer>
        {cart.map(item => (
          <OrderCard item={item}/>
        ))}
        
        <OrderCard/>
        <SubInfos>
          <p style={{textAlign: "right"}}>Frete R$6,00</p>
          <SubtotalInfo>
            <span>SUBTOTAL</span>
            <span style={{color: "#e86e5a"}}>R$41,90</span>
          </SubtotalInfo>
        </SubInfos>
        <PaymentMethodContainer>
          <p>Forma de pagamento</p>
          <PaymentOptionsContainer>
            <label>
              <input type="radio" name="choice" value="cash" /> Dinheiro
            </label>
            <label>
              <input type="radio" name="choice" value="credit-card" /> Cartão de crédito
            </label>
          </PaymentOptionsContainer>
        </PaymentMethodContainer>
        <ConfirmButton>Confirmar</ConfirmButton>
      </CartContainer>
    </InnerScreen>
  );
}

export default Cart;