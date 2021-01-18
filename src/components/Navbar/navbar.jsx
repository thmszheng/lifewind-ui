import React, { useState } from 'react';
import { NavContainer, MenuBars, MenuLinks, NavLink, MenuContainer, LogoContainer, LogoName, LifeWindLogo } from './styled';
import Button from '../Button';
import CreateAccount from "../AccountModal/CreateAccount";
import Login from "../AccountModal/Login";

const linkPages = ["News", "Blogs"];

const Navbar = ({ savedLogin: { userId, username }}) => {
  const [isCreateAcctModalActive, activateCreateAcctModal] = useState(false);
  const [isLogInModalActive, activateLogInModal] = useState(false);

  const handleJoinOnclick = () => activateCreateAcctModal(!isCreateAcctModalActive);
  const handleLogInOnclick = () => activateLogInModal(!isLogInModalActive);

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
            <NavLink to="/" onClick={handleJoinOnclick}>
              JOIN
            </NavLink>
          </MenuLinks>
          <Button width="100px" height="35px" onClick={handleLogInOnclick}>
            Log In
          </Button>
        </MenuContainer>
      </NavContainer>
      <CreateAccount active={isCreateAcctModalActive} onClick={handleJoinOnclick}/>
      <Login active={isLogInModalActive} onClick={handleLogInOnclick}/>
    </>
  )
};

export default Navbar;
