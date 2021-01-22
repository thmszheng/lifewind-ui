import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  Heading,
  FormContainer,
  InputContainer,
  FormField,
  StatusMessage,
} from "../styled";
import Button from "../../Button";
import Loader from "../Loader";
import { Auth } from "aws-amplify";

const CreateAccount = ({
  form,
  handleSubmit,
  active,
  onClick,
  username,
  email,
  password,
  createAccountSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleJoinOnClick = async () => {
    try {
      setLoading(true);
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          preferred_username: username,
        },
      });
      setLoading(false);
      setSuccessMessage("Your account has been created");
      createAccountSuccess();
    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage(error.message.split(":").pop());
      setLoading(false);
    }
  };

  return (
    <>
      <ModalOverlay active={active} onClick={onClick} />
      <ModalContainer active={active}>
        <Loader loading={loading} />
        <CloseButton onClick={onClick} />
        <Heading>Create a new account</Heading>
        <FormContainer form={form} onSubmit={handleSubmit}>
          <InputContainer>
            <FormField
              component="input"
              name="username"
              type="text"
              placeholder="Your Username"
            />
            <FormField
              component="input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <FormField
              component="input"
              name="password"
              type="password"
              placeholder="Your Password"
            />
          </InputContainer>
          <Button
            width="50%"
            height="40px"
            btnStyle="primary"
            type="submit"
            margin="0 0 15px 0"
            onClick={handleJoinOnClick}
          >
            Join
          </Button>
          <StatusMessage color={successMessage ? "green" : "red"}>
            {successMessage || errorMessage}
          </StatusMessage>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default CreateAccount;
