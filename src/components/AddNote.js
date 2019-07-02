import React from 'react';

function AddNote (props) {
  return (
    <li key= {props.keyNote}>
      <h2>{props.name}</h2>
      <p>{props.modified}</p>
      <p>{props.content}</p>
      <button>Delete Note</button>

    </li>

  )
}

export default AddNote;