import React, { useState } from "react";

function CreateBook(props) {
  const [title, setTitle] = useState("");
  const handleSubmit = () => {
    props.onBookCreate(title);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter the title"
          id="title"
          value={title}
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default CreateBook;
