import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

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
  width: 400px;
  
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;
  color: white;
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

