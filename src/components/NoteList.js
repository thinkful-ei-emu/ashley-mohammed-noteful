import React from "react";
import Note from "./Note";



function NoteList(props) {
  
  let noteList = props.notes.map(note => {
    return (
      
      <Note
        key={note.id}
        id={note.id}
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
