import React, {useState} from 'react';
import { 
    OrderContainer, 
    OrderDetailsContainer,
    OrderQuantity,
    OrderQuantityContainer,
    RemoveContainer,
    RemoveBottom, 
    Img
} from './styled-cart-page'
import ImgCard from '../../Img/hamburger.jpg'
import { useCart } from '../../contexts/shoppingCart';

const OrderCard = (props) => {
    const { removeFromCart } = useCart();

    return (
        <OrderContainer>
            <Img src={props.item.photoUrl} />
            <OrderDetailsContainer>
                <OrderQuantityContainer>
                    <OrderQuantity>
                        <p>{props.item.quantity}</p>
                    </OrderQuantity>
                </OrderQuantityContainer>
                <p>{props.item.name}</p>
                <span>{props.item.description}</span>
                <RemoveContainer>
                    <h4>R${props.item.price}</h4>
                    <RemoveBottom onClick={() => removeFromCart(props.item.id)}>
                        <p>Remover</p>
                    </RemoveBottom>
                </RemoveContainer>
            </OrderDetailsContainer>
        </OrderContainer>
    )
};

export default OrderCard;