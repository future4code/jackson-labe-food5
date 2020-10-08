import styled from 'styled-components'
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

export const Title = styled.h2`
    width: 175px;
    height: 44px;

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
  
  span {
    width: 84px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    padding: 12px 115px;
    }
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
export const ImgContainer = styled.div`
    padding: 17px 16px 12px 16px;
    img{
        width: 328px;
        height: 120px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;    
    }

`
export const ContainerRestaurant = styled.div`
  margin-bottom: 0px;
     p {
        margin-top: 0px;
        margin-bottom: 8px;
        width: 328px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #e86e5a;
     }
    
    span {
    width: 104px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin: 0px 37.31px 8px 0px;
    }

    h4 {
    width: 328px !important;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin: 8px 8px 8px 0px;
    }
`
export const SpanSubtitle = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 8px 0px 7px 0px;

  p {
    margin: 8px 0px 7px 0px;
    padding: 0px;
   border-bottom: solid 1px black;
  }
`
export const ContainerProduct = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 10px;
  display: flex;

`
export const Img = styled.img`
  width: 97px;
  height: 111px ;
  object-fit: fill;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  
`
export const ContainerDetails = styled.div `
  margin: 0px 0px 6px 16px;
  
  p {
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
export const Quantidity = styled.div`
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
export const ContQuantidity = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: flex-end;
`
export const BottomAdicionar = styled.div`
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
  &:active {
        color: black;
    }
  }
  
`
export const ContAdd = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  h4 {
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
export const ContainerAll = styled.div`
  width: 328px;
  height: 214px;
  background-color: white;
  margin: 228px 16px 196px 23px;
  display: flex;
  flex-direction: column;

    p{
        width: 296px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var(--black);
        margin-top: 43px;
        margin-left: 16px;
    }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  option {
    width: 232px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    margin: 0px 16px 0px 16px;
  }

  select {
    width: 296px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    margin: 19px 16px 0px 16px
  }
  p {
    width: 183px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #4a90e2;
    margin: 23px 5px 21px 129px;
  }
`