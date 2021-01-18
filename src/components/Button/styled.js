import styled, { css } from 'styled-components';

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

const buttonStyles = {
  primary: primaryButtonStyles,
  secondary: secondaryButtonStyles,
};

export const StyledButton = styled.button`
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  
  text-decoration: none;
  cursor: pointer;
  
  font-family: "Lucida Sans Unicode";
  font-size: 15px;
  font-weight: bold;
  
  ${({ width, height }) => width && `
    width: ${width};
    height: ${height};
  `};
  
  ${({ btnStyle }) => `
    ${buttonStyles[btnStyle]}
  `};
`;
