import React from 'react';
import { BlogContainer, StoryContainer, Title, MetaInfo, AuthorLink, Body, ReadMoreLink } from '../styled';

const BlogStories = ({ blogStories }) => {
  return (
    <BlogContainer>
      {blogStories.map(({ title, body, username, userId, added }, index) => (
        <StoryContainer key={index}>
          <Title>
            {title}
          </Title>
          <MetaInfo>
            <AuthorLink href={`/user/${userId}`} to={`/user/${userId}`}>
              {username}
            </AuthorLink>
            {added}
          </MetaInfo>
          <Body>
            {body}
          </Body>
          <ReadMoreLink to="/">
            Read More
          </ReadMoreLink>
        </StoryContainer>
      ))}
    </BlogContainer>
  )
};

export default BlogStories;
