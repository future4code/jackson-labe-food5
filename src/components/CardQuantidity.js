import React from 'react';
import styled from 'styled-components'
import {ContainerAll, Form} from './styled'

const CardQuantidity= () => {

  return (
   <ContainerAll>
       <p>Selecione a quantidade desejada</p>
       <Form>
            <select name="select">
                <option value="1" selected> 1</option> 
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option> 
                <option value="5"> 5</option>
                <option value="6"> 6</option>
            </select>
            <button>adicionar</button>
       </Form>
   </ContainerAll>
);
}

export default CardQuantidity;