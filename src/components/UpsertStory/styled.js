import styled from "styled-components";
import { Field } from "redux-form";
import { NavLink } from "react-router-dom";

export const NewStoryContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 150px;

  @media screen and (max-width: 1200px) {
    padding: 150px 70px 150px 70px;
  }

  @media screen and (max-width: 800px) {
    padding: 130px 30px 75px 30px;
  }
`;

export const TitleField = styled(Field)`
  margin: 10px 0 25px 0;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border-style: solid;
  border-color: lightgrey;
  border-width: 1px;
  font-size: 20px;
  font-family: Lucida Sans, Lucida Sans Unicode, Helvetica, Arial, sans-serif; ;
`;

export const EditorField = styled(Field)`
  display: none;
`;

export const UpsertStoryButton = styled(NavLink)``;
