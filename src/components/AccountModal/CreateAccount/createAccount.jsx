import React from 'react';
import { AccountModalOverlay, ModalContainer, CloseButton, Heading, FormContainer, InputContainer, FormField } from "../styled";
import Button from "../../Button";

const CreateAccount = ({ form, handleSubmit, active, onClick }) => {
  return (
    <>
      <AccountModalOverlay active={active} onClick={onClick}/>
      <ModalContainer active={active}>
        <CloseButton onClick={onClick}/>
        <Heading>
          Create a new account
        </Heading>
        <FormContainer form={form} onSubmit={handleSubmit}>
          <InputContainer>
            <FormField component="input" name="username" type="text" placeholder="Your Username"/>
            <FormField component="input" name="email" type="email" placeholder="Your Email"/>
            <FormField component="input" name="password" type="password" placeholder="Your Password"/>
          </InputContainer>
          <Button width="50%" height="40px" btnStyle="primary" type="submit">
            Join
          </Button>
        </FormContainer>
      </ModalContainer>
    </>
  )
};

export default CreateAccount;
