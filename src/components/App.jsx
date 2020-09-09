import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, token) => {
        return token !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />

      <div className="notes-container">
        {notes.map((noteItem, token) => {
          return (
            <Note
              key={token}
              id={token}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
