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
  WelcomeHeader,
  SideNavMenu,
  CloseMenu,
  CloseAccountLogo,
} from "./styled";
import OutsideAlerter from "../../hooks/outsideAlerter";
import Button from "../Button";
import CreateAccount from "../Modal/CreateAccount";
import Login from "../Modal/Login";

const Navbar = ({ savedLogin: { userId, username }, logout }) => {
  const {
    visible: isMenuDropdownVisible,
    setVisible: setIsMenuDropdownVisible,
    ref: menuDropdownRef,
  } = OutsideAlerter(false);
  const {
    visible: isSideNavVisible,
    setVisible: setIsSideNavVisible,
    ref: sideNavRef,
  } = OutsideAlerter(false);

  const [isCreateAcctModalActive, setIsCreateAcctModalActive] = useState(false);
  const [isLogInModalActive, setIsLogInModalActive] = useState(false);

  const handleJoinOnClick = () =>
    setIsCreateAcctModalActive(!isCreateAcctModalActive);
  const handleLogInOnClick = () => setIsLogInModalActive(!isLogInModalActive);

  const handleSideNavOnClick = () => {
    setIsSideNavVisible(!isSideNavVisible);
  };

  const handleMenuDropdownOnClick = () => {
    setIsMenuDropdownVisible(!isMenuDropdownVisible);
  };

  return (
    <>
      <NavContainer>
        {isSideNavVisible ? (
          <CloseMenu onClick={handleSideNavOnClick} />
        ) : (
          <MenuBars onClick={handleSideNavOnClick} />
        )}
        <NavLink to="/">
          <LogoContainer>
            <LogoName>LIFEWIND</LogoName>
            <LifeWindLogo />
          </LogoContainer>
        </NavLink>
        <MenuContainer>
          <MenuLinks>
            <NavLink to="/news">NEWS</NavLink>
            <NavLink to="/blog">BLOG</NavLink>
            {!userId && (
              <NavLink
                to="/"
                onClick={(e) => {
                  handleJoinOnClick();
                  e.preventDefault();
                }}
              >
                JOIN
              </NavLink>
            )}
          </MenuLinks>
          <Button
            hide={!!userId}
            width="100px"
            height="35px"
            onClick={handleLogInOnClick}
            btnStyle="secondary"
          >
            Log In
          </Button>
          <AccountMenuContainer>
            {userId &&
              (isMenuDropdownVisible ? (
                <CloseAccountLogo onClick={handleMenuDropdownOnClick} />
              ) : (
                <AccountLogo onClick={handleMenuDropdownOnClick} />
              ))}
            {isMenuDropdownVisible && (
              <DropdownContainer ref={menuDropdownRef}>
                <AccountMenuRow>
                  <WelcomeHeader>Welcome {username}</WelcomeHeader>
                </AccountMenuRow>
                <AccountMenuRow>
                  <AccountMenuLink
                    to="/publish"
                    onClick={handleMenuDropdownOnClick}
                  >
                    Write a story
                  </AccountMenuLink>
                  <AccountMenuLink
                    to={`/user/${userId}`}
                    onClick={handleMenuDropdownOnClick}
                  >
                    Your stories
                  </AccountMenuLink>
                </AccountMenuRow>
                <AccountMenuRow>
                  <AccountMenuLink
                    to="/"
                    onClick={() => {
                      handleMenuDropdownOnClick();
                      logout();
                    }}
                  >
                    Log Out
                  </AccountMenuLink>
                </AccountMenuRow>
              </DropdownContainer>
            )}
          </AccountMenuContainer>
        </MenuContainer>
      </NavContainer>
      {isSideNavVisible && (
        <SideNavMenu ref={sideNavRef}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleSideNavOnClick}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" onClick={handleSideNavOnClick}>
                NEWS
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={handleSideNavOnClick}>
                BLOG
              </NavLink>
            </li>
            {!userId && (
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    handleSideNavOnClick();
                    handleJoinOnClick();
                  }}
                >
                  JOIN
                </NavLink>
              </li>
            )}
          </ul>
        </SideNavMenu>
      )}
      <CreateAccount
        active={isCreateAcctModalActive}
        onClick={handleJoinOnClick}
      />
      <Login active={isLogInModalActive} onClick={handleLogInOnClick} />
    </>
  );
};

export default Navbar;
