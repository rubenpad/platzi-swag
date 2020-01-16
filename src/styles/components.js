import { Link } from 'gatsby'

import styled from 'styled-components'
import { above } from './index'

export const colors = {
  green: '#98ca3f',
  orange: '#f8b71c',
  gray: '#969696',
  darkBlue: '#1c3643',
  lightBlue: '#1e5372',
  softGray: '#f6f8f9',
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.darkBlue},
    ${colors.lightBlue}
  );
  
  width: 100%;
  max-width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
`

export const Logo = styled(Link)`
  height: 50%;
  margin-left: 2rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`

export const Menu = styled.nav`
  margin-right: 2rem;
  ul {
    display: flex;
    margin: 0;
    a {
      font-size: 1rem;
    }
  }
`

export const StyledJumbo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 0 0 0;
  color: white;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;
  
  div{
    padding: 1rem;
    width: 90vw
  };
  & h2 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  };
  & small{
    font-weight: 100;
    font-size: 0.6rem;
  };
  & img{
    width: 35vw;
  };
  ${above.medium`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.mediumL`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 2rem 10rem;
    flex-direction: row;
    & h2 {
      margin: 0;
      font-weight: 500;
      font-size: 2rem;
    };
  `}
  &:before{
    content: " ";
    background-color: red;
    background-color: ${colors.darkBlue};
    z-index: -1;
    position: absolute;
    transform: rotate(-9deg);
    border-radius: 35%;
    top: -15%;
    width: 120%;
    height: 15rem;

    ${above.medium`
      height: 20rem;
      top: -50%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 52vw;
      top: -66%;
    `}
  };
`

export const StyledProducts = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  h2 {
    color: ${colors.darkBlue};
    font-size: 2rem;
  }

  article {
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    & img {
      object-fit: cover;
      object-position: center;
      margin: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      margin: 0;
      color: ${colors.green};
      font-weight: 500;
      font-size: 1.2rem;
    }
    small {
      color: ${colors.darkBlue};
      font-weight: 500;
      font-size: 1.2rem;
    }
    a {
      color: ${colors.darkBlue};
      font-size: 0.8rem;
      border-bottom: 3px solid ${colors.green};
      span {
        color: ${colors.green};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  section {
    display: grid;
    grid-gap: 2rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 10rem;
    `};
  }
`

export const StyledProductDetail = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 9.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  * {
    margin: 0;
  }

  ${above.medium`
    img {
      margin-right: 2rem;
    }
  `}
`

export const Actions = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  ${above.medium`
    width: 300px;
  `}
`

export const StyledCart = styled.div`
  padding: 1rem;
  height: 90vh;
  overflow-y: scroll;
  h2 {
    border-bottom: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
  & th {
    color: #959595;
    margin: 0;
    border: none;
  }
  & img {
    vertical-align: middle;
    width: 60px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.darkBlue};
    div {
      display: flex;
      align-items: baseline;
      width: 250px;
      justify-content: space-between;
    }
  }
  & small {
    color: #505050;
    font-size: 0.9rem;
  }
  ${above.medium`
    padding: 1rem 3rem;
  `}
  ${above.large`
    padding: 5rem 10rem;
  `}
`

export const MenuItem = styled.li`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? '0 13px 0 13px' : '0 0 0 13px')};
  a {
    color: white;
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    border-right: ${({ margin }) => (margin ? '1px solid white' : '')};
    padding: ${({ margin }) => (margin ? '0 26px 0 26px' : '0 0 0 26px')};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`

export const Footer = styled.footer`
  height: 70px;
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  a {
    color: ${colors.green};
  }
`

export const Tag = styled.span`
  padding: 0.3rem 1.5rem;
  background-color: ${colors.gray};
  display: inline-block;
  margin: 0.5rem 0;
  color: white;
  border-radius: 4px;
`

export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${colors.green};
  }
`

export const QtyButton = styled.button`
  padding: 0.4rem;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
export const QtySelect = styled.div`
  display: flex;
  margin: 0.6rem 0;
  button {
    padding: 0 10px;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707070;
  }
  input {
    padding: 0.4rem;
    background-color: transparent;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    border-right: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 40px;
    max-height: 40px;
  }
`
export const SizeSelect = styled.div`
  display: grid;
  width: 10rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  font-size: 0.8rem;
  margin: 0.6rem 0;
  button:nth-child(${props => props.selected}) {
    background: ${colors.green};
  }
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === 'outline' ? 'transparent' : colors.green};
  color: ${({ type }) => (type === 'outline' ? colors.darkBlue : 'white')};
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === 'outline'
      ? `3px solid ${colors.darkBlue}`
      : `3px solid ${colors.green}`};
  border-radius: 4px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === 'outline' ? colors.darkBlue : 'white')};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`

export const SelectStars = styled.div`
  span {
    margin: 0 5px;
    color: ${colors.gray};
    cursor: pointer;
  }
  span:nth-child(-n + ${props => props.selected}) {
    color: ${colors.orange};
  }
`
export const Purchase = styled.div`
  width: 100%;
  height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2rem;
  }
  p {
    margin: 2px 0;
  }
  span {
    font-size: 2rem;
  }
`

export const Content = styled.div``
