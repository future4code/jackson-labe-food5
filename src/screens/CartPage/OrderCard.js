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

const OrderCard = () => {
    return (
        <OrderContainer>
            <Img src={ImgCard} />
            <OrderDetailsContainer>
                <OrderQuantityContainer>
                    <OrderQuantity>
                        <p>0</p>
                    </OrderQuantity>
                </OrderQuantityContainer>
                <p>Hamburger</p>
                <span>Pão, tomate, queijo, alface, molho</span>
                <RemoveContainer>
                    <h4>R$ 35,90</h4>
                    <RemoveBottom>
                        <p>Remover</p>
                    </RemoveBottom>
                </RemoveContainer>
            </OrderDetailsContainer>
        </OrderContainer>
    )
};

export default OrderCard;