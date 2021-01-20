import React from 'react';
import {AuthorLink, BlogContainer, Body, MetaInfo, ReadMoreLink, StoryContainer, Title, EditIcon, DeleteIcon } from "../styled";

const UserStories = ({ savedLogin: { userId: savedUserId }, userStories }) => {
  return (
    <BlogContainer>
      {userStories.map(({ _id, title, body, username, userId, added }, index) => (
        <StoryContainer key={index}>
          <Title>
            {title}
          </Title>
          <MetaInfo>
            <AuthorLink to={`/user/${userId}`}>
              {username}
            </AuthorLink>
            {added}
            {savedUserId === userId &&
              <>
                <EditIcon/>
                <DeleteIcon/>
              </>
            }
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

export default UserStories;
