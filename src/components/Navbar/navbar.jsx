import React, { useState } from "react";
import {
  NavContainer,
  MenuBars,
  MenuLinks,
  NavLink,
  MenuContainer,
  LogoContainer,
  LogoName,
  LifeWindLogo,
  AccountMenuContainer,
  AccountLogo,
  DropdownContainer,
  AccountMenuRow,
  AccountMenuLink,
  WelcomeHeader
} from "./styled";
import OutsideAlerter from "../../hooks/outsideAlerter";
import Button from "../Button";
import CreateAccount from "../AccountModal/CreateAccount";
import Login from "../AccountModal/Login";

const Navbar = ({ savedLogin: { userId, username } }) => {
  const { visible, setVisible, ref } = OutsideAlerter(false);
  const [isCreateAcctModalActive, activateCreateAcctModal] = useState(false);
  const [isLogInModalActive, activateLogInModal] = useState(false);
  const [isDropdownMenuActive, activateDropdownMenu] = useState(false);

  const handleJoinOnClick = () => activateCreateAcctModal(!isCreateAcctModalActive);
  const handleLogInOnClick = () => activateLogInModal(!isLogInModalActive);
  const handleMenuDropdownOnClick = () => {
    if (!visible && isDropdownMenuActive) {
      activateDropdownMenu(false);
    }
    else if(!visible && !isDropdownMenuActive) {
      setVisible(true);
      activateDropdownMenu(true);
    }
    else {
      activateDropdownMenu ? setVisible(false) : setVisible(true);
      activateDropdownMenu(!isDropdownMenuActive);
    }
  }

  return (
    <>
      <NavContainer>
        <MenuBars />
        <NavLink to="/">
          <LogoContainer>
            <LogoName>LIFEWIND</LogoName>
            <LifeWindLogo />
          </LogoContainer>
        </NavLink>
        <MenuContainer>
          <MenuLinks>
            <NavLink to="/">NEWS</NavLink>
            <NavLink to="/">BLOG</NavLink>
            <NavLink to="/" hide={!!userId} onClick={handleJoinOnClick}>
              JOIN
            </NavLink>
          </MenuLinks>
          <Button hide={!!userId} width="100px" height="35px" onClick={handleLogInOnClick}>
            Log In
          </Button>
          <AccountMenuContainer>
            <AccountLogo show={!!userId} onClick={handleMenuDropdownOnClick} refs={ref}/>
            {visible &&
            <DropdownContainer ref={ref}>
              <AccountMenuRow>
                <WelcomeHeader>
                  Welcome {username}
                </WelcomeHeader>
              </AccountMenuRow>
              <AccountMenuRow>
                <AccountMenuLink to="/">
                  Write a story
                </AccountMenuLink>
                <AccountMenuLink to="/">
                  Your stories
                </AccountMenuLink>
              </AccountMenuRow>
              <AccountMenuRow>
                <AccountMenuLink to="/">
                  Log Out
                </AccountMenuLink>
              </AccountMenuRow>
            </DropdownContainer>
            }
          </AccountMenuContainer>
        </MenuContainer>
      </NavContainer>
      <CreateAccount
        active={isCreateAcctModalActive}
        onClick={handleJoinOnClick}
      />
      <Login active={isLogInModalActive} onClick={handleLogInOnClick} />
    </>
  );
};

export default Navbar;
