import React from "react";
import {
  LoaderContainer,
  SpinnerWrapper,
  Spinner,
  SpinnerBase,
} from "./styled";

const Loader = ({ loading }) =>
  loading ? (
    <LoaderContainer>
      <SpinnerWrapper>
        <Spinner />
        <SpinnerBase />
      </SpinnerWrapper>
    </LoaderContainer>
  ) : null;

export default Loader;
