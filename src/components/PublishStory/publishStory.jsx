import React from 'react';
import { NewStoryContainer } from './styled';
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import { TitleField, EditorField }from './styled';
import Button from "../Button";

const mdParser = new MarkdownIt();

const PublishStory = ({ form, handleSubmit, change }) => {
  const handleEditorChange = ({ text }) => {
    change('body', text);
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
        style={{ height: "550px", width: "100%", marginBottom: "20px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <EditorField
        component="input"
        name="body"
        type="text"
      />
      <Button btnStyle="primary" width="150px" height="40px" type="submit">
        Publish
      </Button>
    </NewStoryContainer>
  )
};

export default PublishStory;
