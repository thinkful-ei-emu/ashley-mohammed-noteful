import React from 'react'
import {Route} from 'react-router-dom';
import Header from '../components/Header';
class Main extends React.Component (){
    render(){
        return(
            <main>
                            <Sidebar folders= {this.state.store.folders}/>
            <NoteList notes= {this.state.store.notes}/>
            </main>

        )
    }

}
export default Main;