import React from 'react'
import './Main.css'

import Sidebar from '../components/Sidebar';
import NoteList from '../components/NoteList';
function Main (props){
   
        return(
            <main  className="flex-container">
           
            <NoteList notes= {props.notes}/>
            </main>
        )
    

}
export default Main;