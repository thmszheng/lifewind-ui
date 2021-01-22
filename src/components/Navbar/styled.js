import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiPaperWindmill } from "react-icons/gi";
import { FaBars, FaUserCircle, FaRegUserCircle, FaTimes } from "react-icons/fa";

const accountLogoStyle = css`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

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

export const CloseMenu = styled(FaTimes)`
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
  ${accountLogoStyle}
`;

export const CloseAccountLogo = styled(FaRegUserCircle)`
  ${accountLogoStyle}
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 0;
  top: 80px;
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

export const WelcomeHeader = styled.h3`
  color: #242736;
  font-weight: normal;
  font-size: 17px;
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

export const SideNavMenu = styled.div`
  top: 80px;
  left: 0;
  position: fixed;
  background-color: white;
  width: 170px;
  margin: 0;
  z-index: 100;

  -moz-box-shadow: 0 0 4px grey;
  -webkit-box-shadow: 0 0 4px grey;
  box-shadow: 0 0 4px grey;

  & > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & li {
    padding: 25px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  & a {
    color: dimgrey;
    font-size: 21px;
    margin: 0;
  }

  & a:hover {
    color: black;
  }

  @media screen and (min-width: 850px) {
    display: none;
  }
`;
