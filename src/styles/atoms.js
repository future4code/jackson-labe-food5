import styled from 'styled-components'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

export const VisibilityIcon = styled(MdVisibility)`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 285px;
  bottom: 16px; 
`

export const VisibilityOffIcon = styled(MdVisibilityOff)`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 285px;
  bottom: 16px;
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

export const InnerScreen = styled.div`
    padding: 64px 0px; 
`

export const DescriptionText = styled.span`
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`