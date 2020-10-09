import styled from 'styled-components'

export const UserAdressContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eeeeee;
`

export const RestaurantInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 16px;
    height: 100px;
`

export const OrderContainer = styled.div`
  position: relative;

  align-self: center;
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 10px;
  display: flex;
`

export const OrderDetailsContainer = styled.div `
  margin: 0px 0px 6px 16px;
  
  p {
    position: absolute;
    top: 10px;
    width: 166px;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e86e5a;
    margin: 0px 0px 6px 0px;
  }

  span {
    position: absolute;
    top: 48px;
    width: 198px;
    height: 30px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.34px;
    color: #b8b8b8;
    margin: 0px 17px 6px 0px;
  }

`
export const OrderQuantity = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 33px;
  height: 33px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 9px;
    height: 19px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #e86e5a;
  }
`

export const OrderQuantityContainer = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: flex-end;
`

export const RemoveContainer = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  h4 {
    position: absolute;
    bottom: 10px;
    width: 108px;
    height: 19px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    margin: 3px 0px 0px 0px;
  }
`

export const RemoveBottom = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 90px;
  height: 31px;
  border: solid 1px #e02020;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 43px;
    height: 14px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    text-align: center;
    color: #e02020;
  } 
`

export const Img = styled.img`
  width: 97px;
  height: 111px ;
  object-fit: fill;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px; 
`

export const SubInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  color: black;
`

export const SubtotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  height: 100%;
  flex-grow: 1;
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  border-top: solid 1px black;
`

export const ConfirmButton = styled.button`
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  border: none;
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  margin-top: 8px;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  padding: 0 16px;
`