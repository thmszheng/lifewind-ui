import React from 'react';
import { AccountModalOverlay, ModalContainer, CloseButton, Heading, FormContainer, FormInput } from "../styled";
import Button from "../../Button";

const CreateAccount = ({ active, onClick }) => {
  return (
    <>
      <AccountModalOverlay active={active} onClick={onClick}/>
      <ModalContainer active={active}>
        <CloseButton onClick={onClick}/>
        <FormContainer>
          <Heading>
            Create a new account
          </Heading>
          <FormInput type="text" placeholder="Your Username"/>
          <FormInput type="email" placeholder="Your Email"/>
          <FormInput type="password" placeholder="Your Password"/>
          <Button width="50%" btnStyle="primary">
            Join
          </Button>
        </FormContainer>
      </ModalContainer>
    </>
  )
};

export default CreateAccount;
