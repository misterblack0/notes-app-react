import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const { id, title, content } = props;

  return (
    <div className="note">
      <div className="note-header">
        <h1>{title}</h1>
      </div>
      <div className="note-body">
        <p>{content}</p>
        <div className="note-footer">
          <IconButton onClick={() => props.onDelete(id)} aria-label="delete">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Note;
