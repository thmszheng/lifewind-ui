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

const BlogStories = ({ newsStories, getNewsStoriesAction }) => {
  useEffect(() => {
    getNewsStoriesAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BlogContainer>
      <PageTitle>News</PageTitle>
      {newsStories.map(({ id, title, body, author, added }, index) => (
        <StoryContainer key={index}>
          <Title>{title}</Title>
          <MetaInfo>
            <AuthorLink
              to="/"
              navigate={false}
              onClick={(e) => e.preventDefault()}
            >
              {author}
            </AuthorLink>
            {added}
          </MetaInfo>
          <Body>{body}</Body>
          <ReadMoreLink to={`/news/${id}`}>Read More</ReadMoreLink>
        </StoryContainer>
      ))}
    </BlogContainer>
  );
};

export default BlogStories;
