import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div className="note-header">
        <h1>{props.title}</h1>
      </div>
      <div className="note-body">
        <p>{props.content}</p>
        <div className="note-footer">
        <IconButton onClick={handleClick} aria-label="delete">
          <DeleteIcon fontSize="large" />
        </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Note;
