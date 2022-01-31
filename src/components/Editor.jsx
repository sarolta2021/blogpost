import React from "react";
import { useState } from "react";

const Editor = (props) => {
  const [title, setTitle] = useState(props?.blogpost?.title ?? ""); //nullish coalescing operator
  const [body, setBody] = useState(props?.blogpost?.body ?? "");
  const [author, setAuthor] = useState(props?.blogpost?.author ?? "");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || body === "" || author === "") {
      return;
    }

    const payload = {
      title: title,
      body: body,
      author: author,
    };

    setTitle("");
    setBody("");
    setAuthor("");

    props.onSave(payload);

    //vagy title, body, author
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title of blog"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="author of blogpost"
        value={author}
        onChange={handleAuthorChange}
      />
      <textarea
        placeholder="body of blogpost"
        value={body}
        onChange={handleBodyChange}
      ></textarea>
      <button disabled={props.loading} type="submit">
        {props.loading ? "loading..." : "SAVE"}
      </button>
    </form>
  );
};

//{loading ? true : false}

export default Editor;
