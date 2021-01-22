import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 499;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: white;

  -webkit-transition: background-color 0.2s ease-in;
  -moz-transition: background-color 0.2s ease-in;
  -ms-transition: background-color 0.2s ease-in;
  -o-transition: background-color 0.2s ease-in;
  transition: background-color 0.2s ease-in;
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center;
  }

  to {
    transform: rotate(360deg);
    transform-origin: center;
  }
`;

export const Spinner = styled.div`
  position: relative;
  z-index: 501;
  width: 50px;
  height: 50px;
  background-image: url("/images/spinner.png");
  background-size: cover;

  animation: ${spin} 2s linear infinite;
`;

export const SpinnerBase = styled.div`
  position: relative;
  z-index: 500;
  top: -17px;
  width: 4px;
  height: 15px;
  background-color: #242736;
`;
