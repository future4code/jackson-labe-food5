import React, {useEffect, useState} from 'react';
import { 
  Container,
  ContainerProduct,
  Img,
  ContainerDetails,
  Quantidity,
  ContQuantidity,
  BottomAdicionar,
  ContAdd,
  Form,
  ContainerAll

} from './styled-restaurant-page'
import ImgCard from '../../Img/hamburger.jpg'
import Modal from '@material-ui/core/Modal';
import { goToRestaurantPage } from '../../navigation/Coordinator';
import {useHistory} from 'react-router-dom'

const CardProducts = (props) => {
    const history = useHistory()
    const [selectValue, setSelectValue] = useState("")
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeValue = (event) => {
      setSelectValue(event.target.value)
  }
  const onClickValue = (event) => {
    event.preventDefault()
    const element = document.getElementById('value_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      handleClose()
    }
  }
const removeValue = () => {
    setSelectValue("")
}

  return (
    <Container>
        <ContainerProduct>
            <Img src={props.photoUrl} />
            <ContainerDetails>
                <ContQuantidity>
                  {selectValue ? 
                    <Quantidity>
                       <p>{selectValue}</p>
                  </Quantidity> : <></> }
                </ContQuantidity>
                <p>{props.name}</p>
                <span>{props.description}</span>
                <ContAdd>
                    <h4>R${props.price}</h4>
                    <BottomAdicionar>
                        {selectValue ? <p onClick={removeValue}>Remover</p> : <p onClick={handleOpen}>Adicionar</p> }
                    </BottomAdicionar>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                        <ContainerAll>
                            <p>Selecione a quantidade desejada</p>
                            <Form id='value_form'>
                                <select 
                                    name={selectValue}
                                    value={selectValue}
                                    onChange={onChangeValue}

                                >
                                    <option value=""> </option> 
                                    <option value="1"> 1</option> 
                                    <option value="2"> 2</option>
                                    <option value="3"> 3</option>
                                    <option value="4"> 4</option> 
                                    <option value="5"> 5</option>
                                    <option value="6"> 6</option>
                                </select>
                                    <p type="submit" onClick={onClickValue}>ADICIONAR AO CARRINHO</p>
                            </Form>
                        </ContainerAll>
                    </Modal>
                </ContAdd>
            </ContainerDetails>
        </ContainerProduct>
  </Container>
);
}

export default CardProducts;