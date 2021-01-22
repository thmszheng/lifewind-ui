import React, { useEffect } from "react";
import {
  AuthorLink,
  BlogContainer,
  MetaInfo,
  PageTitle,
  Title,
} from "../../styled";
import { StoryContainer, StoryBody } from "../styled";

const NewsStory = ({
  newsStory: { title, body, author, added },
  match: {
    params: { id: storyId },
  },
  getNewsStoryAction,
}) => {
  useEffect(() => {
    getNewsStoryAction(storyId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BlogContainer>
      <PageTitle>{title ? "Story" : "Not Found"}</PageTitle>
      <StoryContainer>
        <Title>{title}</Title>
        <MetaInfo>
          <AuthorLink
            to={`/`}
            navigate={false}
            onClick={(e) => e.preventDefault()}
          >
            {author}
          </AuthorLink>
          {title ? added : null}
        </MetaInfo>
        <StoryBody>{body}</StoryBody>
      </StoryContainer>
    </BlogContainer>
  );
};

export default NewsStory;
