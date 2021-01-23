import React from "react";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import "../editor.css";
import { TitleField, EditorField, NewStoryContainer } from "../styled";
import MdEditor from "react-markdown-editor-lite";
import Button from "../../Button";

const mdParser = new MarkdownIt();

const editorConfig = {
  view: {
    menu: false,
    html: false,
  },
};

const PublishStory = ({
  form,
  handleSubmit,
  change,
  savedLogin: { userId },
  history,
}) => {
  const handleEditorChange = ({ text }) => {
    change("body", text);
  };

  return (
    <NewStoryContainer form={form} onSubmit={handleSubmit}>
      <TitleField
        component="input"
        name="title"
        type="text"
        placeholder="Your Title"
      />
      <MdEditor
        style={{ height: "550px", width: "100%", marginBottom: "25px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        config={editorConfig}
      />
      <EditorField component="input" name="body" type="text" />
      <Button
        btnStyle="primary"
        width="150px"
        height="40px"
        type="submit"
        onClick={() => {
          history.push(`/user/${userId}`);
          handleSubmit();
        }}
      >
        Publish
      </Button>
    </NewStoryContainer>
  );
};

export default PublishStory;
