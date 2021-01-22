import styled from "styled-components";

export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1100px;
  padding-bottom: 50px;
  margin: 20px 0 20px 0;

  @media screen and (max-width: 1235px) {
    width: 100%;
  }
`;

export const StoryBody = styled.p`
  font-size: 20px;
  margin: 40px 0 55px 0;
  white-space: pre-wrap;
  color: dimgrey;
`;
