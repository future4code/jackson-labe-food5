import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    position: relative;
    top: 12px;
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