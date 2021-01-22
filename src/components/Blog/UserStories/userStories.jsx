import React, { useEffect, useState } from "react";
import {
  AuthorLink,
  BlogContainer,
  Body,
  MetaInfo,
  PageTitle,
  ReadMoreLink,
  StoryContainer,
  Title,
} from "../styled";
import { DeleteIcon, EditLink } from "./styled";
import { MdEdit } from "react-icons/md";
import DeleteModal from "../../Modal/DeleteStory";

const UserStories = ({
  savedLogin: { userId: savedUserId },
  match: {
    params: { id: userId },
  },
  userStories,
  getUserStoriesAction,
  deleteStory,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [toDeleteIds, setToDeleteIds] = useState({});

  const handleDeleteModalOnClick = ({ id, userId } = {}) => {
    setShowModal(!showModal);
    setToDeleteIds({ id, userId });
  };

  useEffect(() => {
    getUserStoriesAction(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <BlogContainer>
      <PageTitle>
        {(userStories[0] && userStories[0].username) || "Not Found"}
      </PageTitle>
      {userStories.map(
        ({ id, title, body, username, userId, added }, index) => (
          <StoryContainer key={index}>
            <Title>{title}</Title>
            <MetaInfo>
              <AuthorLink to={`/user/${userId}`}>{username}</AuthorLink>
              {added}
              {savedUserId === userId && (
                <>
                  <EditLink to={`/edit/${id}`}>
                    <MdEdit />
                  </EditLink>
                  <DeleteIcon
                    onClick={() => handleDeleteModalOnClick({ id, userId })}
                  />
                </>
              )}
            </MetaInfo>
            <Body>{body}</Body>
            <ReadMoreLink to={`/story/${id}`}>Read More</ReadMoreLink>
          </StoryContainer>
        )
      )}
      <DeleteModal
        toDeleteIds={toDeleteIds}
        active={showModal}
        onClick={handleDeleteModalOnClick}
        deleteStory={deleteStory}
      />
    </BlogContainer>
  );
};

export default UserStories;
