import React from 'react';
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 49px;
  border-top: 1px solid #b8b8b8;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #b8b8b8;

  &.active {
    color: #e86e5a;
  }
`

const BottomNavigation = () => {
  return (
    <Container>
      <StyledNavLink
        to='/pagina-inicial'
        isActive={(_, location) => location.pathname === "/pagina-inicial" || location.pathname === "/"}  
      >
        <AiOutlineHome fontSize="27px"/>
      </StyledNavLink>
      <StyledNavLink to='/carrinho'>
        <AiOutlineShoppingCart fontSize="27px"/>
      </StyledNavLink>
      <StyledNavLink to='/dados-pessoais'>
        <AiOutlineUser fontSize="27px"/>
      </StyledNavLink>
    </Container>
  );
};

export default BottomNavigation;