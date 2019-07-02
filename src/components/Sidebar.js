import React from 'react';
import AddFolder from './AddFolder';
import {NavLink} from 'react-router-dom';

function Sidebar (props) {
  let folderList = props.folders.map(folder => {
    return (
      <div>
        <NavLink to={`/folder/${folder.id}`} key={folder.id}>{folder.name}</NavLink>

      </div>
    
     
    );
  });
 
  return (
    <ul>
      {folderList}

    <button>Add folder</button>
    </ul>

  )
}

export default Sidebar;