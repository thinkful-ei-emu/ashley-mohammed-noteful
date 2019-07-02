import React from 'react';
import {Link} from 'react-router-dom'

function AddNote (props) {
  return (
    <li key= {props.keyNote}>
     <h2><Link to={`/note/${props.id}`}>{props.name}</Link></h2>
      <p>{props.modified}</p>
      {/* <p>{props.content}</p> */}
      <button>Delete Note</button>

    </li>

  )
}

export default AddNote;