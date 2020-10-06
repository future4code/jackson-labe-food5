import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

export const Logo = styled.img`
  height: 58px;
  width: 104px;
  margin-top: 88px;
  margin-bottom: 28px;
`

export const Title = styled.h2`
    width: 296px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  span {
    position: relative;
    top: 14px;
    left: 15px;
    width: 80px;
    height: 20px;
    padding: 2px;
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    background-color: white;
    color: #b8b8b8;
  }


  input {
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    font-weight: 400;
    padding: 19px 48px 19px 16px;
  }
  
  input::placeholder {
    color: #d0d0d0;
  }
`
export const Button = styled.button`
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`
export const Bar = styled.div`
    width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
  
`
export const BackIcon = styled(AiOutlineLeft)`
    width: 23px;
    height: 24px;
    object-fit: contain;
`
export const Black = styled.div`
    width: 360px;
    height: 20px;
`