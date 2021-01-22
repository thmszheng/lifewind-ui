import styled, { css } from "styled-components";

const primaryButtonStyles = css`
  color: white;
  background-color: #242736;
  border-color: #242736;
`;

const secondaryButtonStyles = css`
  color: black;
  background-color: white;
  border-color: white;
`;

const borderSecondary = css`
  color: dimgrey;
  background-color: white;
  border-color: dimgrey;

  &:hover {
    color: black;
    border-color: black;
  }
`;

const buttonStyles = {
  primary: primaryButtonStyles,
  secondary: secondaryButtonStyles,
  borderSecondary,
};

export const StyledButton = styled.button`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;

  text-decoration: none;
  cursor: pointer;

  font-family: Lucida Sans, Lucida Sans Unicode, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;

  ${({ width, height, margin }) =>
    `
    width: ${width};
    height: ${height};
    margin: ${margin};
  `};

  ${({ btnStyle }) => `
    ${buttonStyles[btnStyle]}
  `};

  ${({ hide }) =>
    hide &&
    `
    display: none;
  `};
`;
