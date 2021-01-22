import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: 199;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
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
  margin-top: -150px;
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
  z-index: 201;
  width: 60px;
  height: 60px;
  background-image: url("/images/spinner.png");
  background-size: cover;

  animation: ${spin} 2s linear infinite;
`;

export const SpinnerBase = styled.div`
  position: relative;
  z-index: 200;
  top: -17px;
  width: 5px;
  height: 15px;
  background-color: #242736;
`;
