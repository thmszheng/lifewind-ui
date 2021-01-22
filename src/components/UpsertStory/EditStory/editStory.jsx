import React, { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "../editor.css";
import {
  TitleField,
  EditorField,
  NewStoryContainer,
  UpsertStoryButton,
} from "../styled";
import MdEditor from "react-markdown-editor-lite";
import Button from "../../Button";
import { submit } from "redux-form";

const mdParser = new MarkdownIt();

const editorConfig = {
  view: {
    menu: false,
    html: false,
  },
};

const EditStory = ({
  form,
  handleSubmit,
  onSubmit,
  change,
  savedLogin: { userId },
  story: { userId: storyUserId, body },
  editStoryAction,
  match: {
    params: { id },
  },
  history,
}) => {
  const [bodyContent, updateBodyContent] = useState(body);

  useEffect(() => {
    editStoryAction(id);
  }, []);

  useEffect(() => {
    updateBodyContent(body);
  }, [body]);

  const handleEditorChange = ({ text }) => {
    change("body", text);
    updateBodyContent(text);
  };

  if (userId === storyUserId) {
    return (
      <NewStoryContainer form={form} onSubmit={handleSubmit}>
        <TitleField
          component="input"
          name="title"
          type="text"
          placeholder="Your Title"
        />
        <MdEditor
          style={{ height: "550px", width: "100%", marginBottom: "20px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          value={bodyContent}
          config={editorConfig}
        />
        <EditorField component="input" name="body" type="text" />
        <EditorField
          component="input"
          name="id"
          type="text"
          value={storyUserId}
        />
        <Button
          btnStyle="primary"
          width="150px"
          height="40px"
          type="submit"
          onClick={() => {
            handleSubmit();
            history.push(`/user/${userId}`);
          }}
        >
          Save
        </Button>
      </NewStoryContainer>
    );
  }

  return null;
};

export default EditStory;
