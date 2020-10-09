import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

export const ImageLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -110px;
  margin-top: -40px;
  width: 220px;
  heigth: 80px;
`;

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  * {
    box-sizing: border-box;
  }
`;

export const UserHandleContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: white;
    width: 100%;
    padding-top: 16px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 16px 8px 16px;
  align-self: stretch;
`;

export const SearchInput = styled.input`
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    flex-grow: 1;
    padding: 0px 8px 0px 56.3px;

    ::placeholder {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #d0d0d0;
    }
`

export const SearchIcon = styled(MdSearch)`
    width: 24px;
    height: 24px;
    object-fit: contain;
    color: #d0d0d0;
    position: absolute;
    left: 36px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 8px;
    border-bottom: solid 1px #b8b8b8;
`

export const FilterSpan = styled.span`
    height: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #d0d0d0;
  }
`;

export const SearchIcon = styled(MdSearch)`
  width: 24px;
  height: 24px;
  object-fit: contain;
  color: #d0d0d0;
  position: absolute;
  left: 36px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 8px;
  border-bottom: solid 1px #b8b8b8;
`;

export const FilterSpan = styled.span`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`;

export const RestaurantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 120px 16px 0px 16px;
`

export const RestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 328px;
  height: 188px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: fill;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const SubInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 4px;
    color: #d0d0d0;
`
