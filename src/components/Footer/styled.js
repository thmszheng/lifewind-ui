import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #242736;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  text-align: center;
  color: white;

  @media screen and (max-width: 925px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 0 40px 40px 40px;

  @media screen and (max-width: 1100px) {
    margin: 0 0 50px 0;
  }
`;

export const LinkHeading = styled.h2`
  font-family: Trebuchet MS, Lucida Sans, Lucida Sans Unicode, Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const FooterLink = styled(Link)`
  font-size: 15px;
  color: white;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const SocialMediaLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & svg {
    font-size: 35px;
    margin: 3px;
  }
`;
