import React, {useState} from 'react';
import { 
  Container,
  ContainerProduct,
  Img,
  ContainerDetails,
  Quantidity,
  ContQuantidity,
  BottomAdicionar,
  ContAdd

} from './styled-restaurant-page'
import ImgCard from '../../Img/hamburger.jpg'
import CardQuantidity from '../../components/CardQuantidity';


const CardProducts = () => {
    const [cardQuantidity, setCardQuantidity] = useState(false)

    const onClickAdd = () => {
        setCardQuantidity(true)
    }
    if (cardQuantidity) {
        return (
            <CardQuantidity />
        )
    }
  return (
    <Container>
        <ContainerProduct>
            <Img src={ImgCard} />
            <ContainerDetails>
                <ContQuantidity>
                    <Quantidity>
                        <p>0</p>
                    </Quantidity>
                </ContQuantidity>
                <p>Hamburger</p>
                <span>Pão, tomate, queijo, alface, molho</span>
                <ContAdd>
                    <h4>R$ 35,90</h4>
                    <BottomAdicionar>
                        <p onClick={onClickAdd}>Adicionar</p>
                    </BottomAdicionar>
                </ContAdd>
            </ContainerDetails>
        </ContainerProduct>
  </Container>
);
}

export default CardProducts;