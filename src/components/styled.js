import styled from 'styled-components'

export const ContainerAll = styled.div`
    width: 328px;
  height: 216px;
  background-color: var(--white);
  border: solid 1px black;

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
    padding: 0px 16px 0px 16px;
  }

  select {
    width: 296px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;
    margin: 19px 16px 0px 16px
  }
  button {
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
  }
`