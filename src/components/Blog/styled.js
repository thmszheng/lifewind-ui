import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 50px 50px 50px;

  @media screen and (max-width: 1000px) {
    padding: 150px 70px 50px 70px;
  }

  @media screen and (max-width: 550px) {
    padding: 150px 30px 50px 30px;
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 800px;
  padding-bottom: 85px;
  margin: 35px 0 35px 0;

  border-bottom: 1px lightgrey solid;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 55px;
  margin-bottom: 25px;
  color: #242736;
  font-family: Trebuchet MS, Lucida Sans, Lucida Sans Unicode, Helvetica, Arial,
    sans-serif;

  @media screen and (max-width: 750px) {
    font-size: 45px;
  }

  @media screen and (max-width: 550px) {
    font-size: 40px;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: dimgrey;
  font-size: 14px;
  font-family: Trebuchet MS, Lucida Sans, Lucida Sans Unicode, Helvetica, Arial,
    sans-serif;
`;

export const AuthorLink = styled(Link)`
  color: dimgrey;
  text-decoration: none;
  margin-right: 25px;
  &:hover {
    text-decoration: underline;
  }

  ${({ navigate }) =>
    navigate === false &&
    `
    cursor: initial;
    &:hover {
      text-decoration: none;
    }
  `}
`;

export const Body = styled.p`
  font-size: 20px;
  margin: 20px 0 35px 0;
  white-space: pre-wrap;
  color: dimgrey;

  @media screen and (max-width: 550px) {
    font-size: 17px;
  }
`;

export const ReadMoreLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
  color: dimgrey;
  font-weight: bold;

  &:hover {
    color: black;
  }
`;

export const PageTitle = styled.h1`
  justify-content: center;
  font-size: 35px;
  font-weight: normal;
  font-family: Trebuchet MS, Lucida Sans, Lucida Sans Unicode, Helvetica, Arial,
    sans-serif;
  border-bottom: 2px solid lightgrey;
  color: lightgrey;
  margin: -5px 0 50px 0;
  padding: 15px;

  @media screen and (max-width: 750px) {
    font-size: 30px;
  }

  @media screen and (max-width: 550px) {
    font-size: 27px;
  }
`;
