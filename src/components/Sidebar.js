import React from 'react';
import AddFolder from './AddFolder';

function Sidebar (props) {
  let folderList = props.folders.map(folder => {
    return (
      <AddFolder
        key={folder.id}
        keyfolder={folder.id}
        name={folder.name}
       
      />
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