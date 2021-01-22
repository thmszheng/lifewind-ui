import React from "react";
import { ModalOverlay, Heading, ModalContainer, CloseButton } from "../styled";
import { ButtonContainer } from "./styled";
import Button from "../../Button";

const DeleteModal = ({
  active,
  onClick,
  toDeleteIds: { id, userId },
  deleteStory,
}) => {
  return (
    <>
      <ModalOverlay active={active} onClick={onClick} />
      <ModalContainer active={active} size="small">
        <CloseButton onClick={onClick} />
        <Heading>Are you sure you want to delete this story?</Heading>
        <ButtonContainer>
          <Button
            width="30%"
            height="40px"
            btnStyle="borderSecondary"
            onClick={() => {
              deleteStory({ id, userId });
              onClick();
            }}
          >
            Delete
          </Button>
          <Button
            width="30%"
            height="40px"
            btnStyle="primary"
            onClick={onClick}
          >
            Cancel
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default DeleteModal;
