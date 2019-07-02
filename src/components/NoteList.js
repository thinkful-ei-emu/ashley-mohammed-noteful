import React from "react";
import AddNote from "./AddNote";

function NoteList(props) {
  let noteList = props.notes.map(note => {
    return (
      <AddNote
        key={note.id}
        keyNote={note.id}
        name={note.name}
        modified={note.modified}
        content={note.content}
      />
    );
  });

  return (
    <ul>
      {noteList}
      <button>Add note</button>
    </ul>
  );
}

export default NoteList;
