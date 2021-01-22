import React, { useEffect } from "react";
import {
  AuthorLink,
  BlogContainer,
  MetaInfo,
  PageTitle,
  Title,
} from "../../styled";
import { StoryContainer, StoryBody } from "../styled";

const UserStory = ({
  story: { title, body, username, userId, added },
  match: {
    params: { id: storyId },
  },
  getStoryAction,
}) => {
  useEffect(() => {
    getStoryAction(storyId);
  }, []);
  return (
    <BlogContainer>
      <PageTitle>{title ? "Story" : "Not Found"}</PageTitle>
      <StoryContainer>
        <Title>{title}</Title>
        <MetaInfo>
          <AuthorLink to={`/user/${userId}`}>{username}</AuthorLink>
          {title ? added : null}
        </MetaInfo>
        <StoryBody>{body}</StoryBody>
      </StoryContainer>
    </BlogContainer>
  );
};

export default UserStory;
