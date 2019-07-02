import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import "./App.css";
import STORE from "./components/Store";
import Sidebar from "./components/Sidebar";
import AddNote from "./components/AddNote"

import NoteList from "./components/NoteList"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: STORE
    };
  }

  render() {
    return (
      <div className="App">
        <Header />       
       
          <main  className="flex-container">
          <Sidebar folders= {this.state.store.folders}/>
          <Route
            exact
            path="/"
            render={() => <NoteList notes={this.state.store.notes} />}
          />
          <Route 
            exact
            path="/folder/:folderId"
            render={(routeProps) => {
              console.log(routeProps);
              const filterNotes = this.state.store.notes.filter(note => note.folderId === routeProps.match.params.folderId);
              return <NoteList notes={filterNotes} />
            }}
            />
            <Route
              exact
              path="/note/:noteId"
              render={(routeProps) => {
                console.log(routeProps)
                const findNote = this.state.store.notes.find(note => note.id === routeProps.match.params.noteId);

                return <NoteList notes={findNote}    />

              }}
              />

          </main>

       
          {/* <Route
            exact
            path= "/folder/" //edit id
            render={() =><Sidebar
              folders={this.state.folders.find(folder => folder.id === routeProps.match.params.folderId)} 
          />} /> */}
       

        
      </div>
    );
  }
}

export default App;
