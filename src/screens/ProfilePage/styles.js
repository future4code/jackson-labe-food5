import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 0px;
`

export const PersonalInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  div {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-start;
  color: black;
`

export const AddressContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #eeeeee;

  div {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`

export const HistoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;

  h3 {
    margin: 0px;
    margin-top: 1px;
    padding-bottom: 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
    border-bottom: 1px solid black;
  }
`

export const RestaurantCard = styled.div`
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;

  span:nth-child(1) {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
  }
  
  span:nth-child(2) {
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: black;
  }
  
  span:nth-child(3) {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`