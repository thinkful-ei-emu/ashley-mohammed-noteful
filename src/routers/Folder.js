import React from 'react'
import Sidebar from '../components/Sidebar';
import NoteList from '../components/NoteList';
function Folder (props){
   
        return(
           
            <Sidebar folders= {props.store.folders}/>            
           
        )
    

}
export default Folder;