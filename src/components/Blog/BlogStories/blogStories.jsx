import React, { useEffect } from "react";
import {
  BlogContainer,
  StoryContainer,
  Title,
  MetaInfo,
  AuthorLink,
  Body,
  ReadMoreLink,
  PageTitle,
} from "../styled";

const BlogStories = ({ blogStories, getBlogStoriesAction }) => {
  useEffect(() => {
    getBlogStoriesAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BlogContainer>
      <PageTitle>{blogStories.length ? "Blog" : "Not Found"}</PageTitle>
      {blogStories.map(
        ({ id, title, body, username, userId, added }, index) => (
          <StoryContainer key={index}>
            <Title>{title}</Title>
            <MetaInfo>
              <AuthorLink to={`/user/${userId}`}>{username}</AuthorLink>
              {added}
            </MetaInfo>
            <Body>{body}</Body>
            <ReadMoreLink to={`/story/${id}`}>Read More</ReadMoreLink>
          </StoryContainer>
        )
      )}
    </BlogContainer>
  );
};

export default BlogStories;
