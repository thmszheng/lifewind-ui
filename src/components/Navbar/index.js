import React from 'react';
import { NavContainer, MenuBars, MenuLinks, NavLink, MenuContainer, LogoContainer, LogoName, LifeWindLogo } from './styled';
import Button from '../Button';

const linkPages = ["News", "Blogs"];

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <MenuBars/>
        <NavLink to="/">
          <LogoContainer>
            <LogoName>
              LIFEWIND
            </LogoName>
            <LifeWindLogo/>
          </LogoContainer>
        </NavLink>
        <MenuContainer>
          <MenuLinks>
            <NavLink to="/">
              NEWS
            </NavLink>
            <NavLink to="/">
              BLOG
            </NavLink>
            <NavLink to="/">
              JOIN
            </NavLink>
          </MenuLinks>
          <Button>
            Log In
          </Button>
        </MenuContainer>
      </NavContainer>
    </>
  )
};

export default Navbar;
