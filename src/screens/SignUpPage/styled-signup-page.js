import styled from 'styled-components';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  width: 104px;
  height: 58px;
`
export const Title = styled.title`
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

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
        span { width: 78px;
        height: 18px;
        font-family: Roboto;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: #b8b8b8;
        }

        input {
        width: 264px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #d0d0d0;
        }
        input::placeholder {
            color: #d0d0d0;
        }
`

export const Button = styled.button`
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
`
