import React, { useState } from "react";
import {
  ModalOverlay,
  CloseButton,
  FormContainer,
  FormField,
  Heading,
  InputContainer,
  ModalContainer,
  StatusMessage,
} from "../styled";
import Button from "../../Button";
import { Auth } from "aws-amplify";
import Loader from "../Loader";

const Login = ({
  form,
  handleSubmit,
  active,
  onClick,
  email,
  password,
  saveLogin,
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignInOnClick = async () => {
    try {
      setLoading(true);
      const {
        attributes: { preferred_username },
      } = await Auth.signIn(email, password);
      const tokens = await Auth.currentSession();
      const userId = tokens.getIdToken().payload["cognito:username"];

      saveLogin({ userId, username: preferred_username });
      setLoading(false);
      onClick();
    } catch (error) {
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
        <Heading>Login to your account</Heading>
        <FormContainer form={form} onSubmit={handleSubmit}>
          <InputContainer>
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
            onClick={handleSignInOnClick}
          >
            Login
          </Button>
          <StatusMessage color="red">{errorMessage}</StatusMessage>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default Login;
