import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { Field } from "redux-form";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  pointer-events: none;

  -webkit-transition: background-color 0.2s ease-in;
  -moz-transition: background-color 0.2s ease-in;
  -ms-transition: background-color 0.2s ease-in;
  -o-transition: background-color 0.2s ease-in;
  transition: background-color 0.2s ease-in;

  ${({ active }) =>
    active &&
    `
    z-index: 200;
    pointer-events: auto;
    background-color: rgba(255,255,255,0.6);
  `};
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: -1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 600px;
  padding: 10px;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  -webkit-transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  -moz-transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  -ms-transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  -o-transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;

  background-color: white;
  -moz-box-shadow: 0 0 4px grey;
  -webkit-box-shadow: 0 0 4px grey;
  box-shadow: 0 0 4px grey;

  ${({ active }) =>
    active &&
    `
    pointer-events: auto;
    visibility: initial;
    z-index: 300;
    display: flex;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  `};

  ${({ size }) =>
    size === "small" &&
    `
      height: 330px;
  `};

  @media screen and (max-width: 750px) {
    width: 100%;
    height: 100%;
  }
`;

export const CloseButton = styled(CgClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: dimgrey;

  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const Heading = styled.h2`
  color: #242736;
  font-size: 25px;
  font-family: Trebuchet MS, Lucida Sans, Lucida Sans Unicode, Helvetica, Arial,
    sans-serif;
  margin: -50px 0 15px 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormField = styled(Field)`
  width: 50%;
  padding: 12px;
  border-radius: 4px;
  border-style: solid;
  border-color: lightgrey;
  border-width: 1px;
  font-size: 18px;
  font-family: Lucida Sans, Lucida Sans Unicode, Helvetica, Arial, sans-serif;
  margin: 15px;

  @media screen and (max-width: 500px) {
    width: 65%;
  }
`;

export const StatusMessage = styled.p`
  ${({ color }) => `
      color: ${color}
  `};
`;
