import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
import { FaBars, FaUserCircle } from "react-icons/fa";

export const NavContainer = styled.nav`
  background-color: #242736;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  padding: 0 20px 0 20px;
  inset: 0;
  z-index: 100;
`;

export const MenuBars = styled(FaBars)`
  color: white;
  display: none;

  @media screen and (max-width: 850px) {
    display: initial;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MenuLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
  
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;
  color: white;
  margin: 0 25px 0 25px;
  
  ${({ hide }) => hide && `
    display: none;
  `};
`;


export const NavSagaLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;
  color: white;
  margin: 0 25px 0 25px;
  
  ${({ hide }) => hide && `
    display: none;
  `};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const LogoName = styled.span`
  color: white;
  font-size: 30px;
  font-family: "Lucida Sans Unicode";
`;

export const LifeWindLogo = styled(GiPaperWindmill)`
  color: white;
  font-size: 30px;
  padding-bottom: 3px;
`;

export const AccountMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AccountLogo = styled(FaUserCircle)`
  display: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  
  ${({ show }) => show && `
    display: initial;
  `};
`
export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  position: absolute;
  right: 20px;
  bottom: -240px;
  z-index: 4;
  
  width: 200px;
  height: 250px;
  
  color: lightgrey;
  background-color: white;
  -moz-box-shadow: 0 0 4px grey;
  -webkit-box-shadow: 0 0 4px grey;
  box-shadow: 0 0 4px grey;
`;

export const AccountMenuRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgrey;
  padding: 15px;
  height: 100%;
`;

export const  WelcomeHeader = styled.h3`
  color: #242736;
  font-weight: normal;
  font-size: 20px;
  font-family: "Trebuchet MS";
`;

export const AccountMenuLink = styled(Link)`
  color: dimgray;
  font-size: 16px;
  font-family: "Trebuchet MS";
  
  text-decoration: none;
  cursor: pointer;
  margin: 10px 0 10px 0;
  
  &:hover {
    color: black;
  }
`;

export const AccountSagaLink = styled.a`
  color: dimgray;
  font-size: 16px;
  font-family: "Trebuchet MS";
  
  text-decoration: none;
  cursor: pointer;
  margin: 10px 0 10px 0;
  
  &:hover {
    color: black;
  }
`;
