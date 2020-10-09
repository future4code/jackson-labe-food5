import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { goBack } from '../navigation/Coordinator'
import { AiOutlineLeft } from "react-icons/ai";

const Container = styled.header`
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 64px;
  width: 100vw;
  padding: 0px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`

const BackButton = styled(AiOutlineLeft)`
  visibility: ${({withbackbutton}) => withbackbutton === 'true' ? 'visible' : 'hidden'};
`

const Header = ({title, withbackbutton}) => {
  const history = useHistory();

  return (
    <Container>
      <BackButton
        withbackbutton={withbackbutton ? 'true' : 'false'}
        onClick={() => goBack(history)}
        fontSize="24px"
      />
      <span>{title}</span>
    </Container>
  );
};

export default Header;