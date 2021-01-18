import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  padding: 80px;
  background-color: #f8f7f4;
  //background-color: #edeceb;

  ${({ bg }) =>
    bg === "light" &&
    `
    background-color: white;
  `};

  @media screen and (max-width: 1140px) {
    padding: 80px 25px 25px 25px;
  }
`;

export const SectionHeading = styled.h1`
  color: #242736;
  font-size: 30px;
  margin-bottom: 30px;
`;
