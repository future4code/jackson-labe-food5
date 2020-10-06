import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

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
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  margin-bottom: 20px;
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
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    padding: 19px 16px;
    width: 328px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
  
  input::placeholder {
    color: #d0d0d0;
  }
`

export const StyledLink = styled(Link)`
  margin-top: 28px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
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
  color: black;
`

export const VisibilityIcon = styled(MdVisibility)`
  position: relative;
  width: 24px;
  height: 24px;
  left: 220px;
  bottom: 40px;
  
`

export const VisibilityOffIcon = styled(MdVisibilityOff)`
  position: relative;
  width: 24px;
  height: 24px;
  left: 220px;
  bottom: 40px;
`