import React from "react";
import { LoaderContainer, Spinner, SpinnerBase } from "./styled";

const Loader = ({ loading }) =>
  loading ? (
    <LoaderContainer>
      <Spinner />
      <SpinnerBase />
    </LoaderContainer>
  ) : null;

export default Loader;
