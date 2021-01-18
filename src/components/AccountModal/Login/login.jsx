import React from 'react';
import {
  AccountModalOverlay,
  CloseButton,
  FormContainer,
  FormField,
  Heading,
  InputContainer,
  ModalContainer
} from "../styled";
import Button from "../../Button";

const Login = ({ form, handleSubmit, active, onClick }) => {
  return (
    <>
      <AccountModalOverlay active={active} onClick={onClick}/>
      <ModalContainer active={active}>
        <CloseButton onClick={onClick}/>
        <Heading>
          Login to your account
        </Heading>
        <FormContainer form={form} onSubmit={handleSubmit}>
          <InputContainer>
            <FormField component="input" name="email" type="email" placeholder="Your Email"/>
            <FormField component="input" name="password" type="password" placeholder="Your Password"/>
          </InputContainer>
          <Button width="50%" height="40px" btnStyle="primary" type="submit">
            Login
          </Button>
        </FormContainer>
      </ModalContainer>
    </>
  )
};

export default Login;
