import React from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import "./App.css";
import STORE from "./components/Store";
import Sidebar from "./components/Sidebar";


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
              return <NoteList  notes={filterNotes} />
            }}
            />
            <Route
              exact
              path="/note/:noteId"
              render={(routeProps) => {
                console.log(routeProps.match.params.noteId)
                const filterNotes = this.state.store.notes.filter(note => note.id === routeProps.match.params.noteId);
                console.log(filterNotes)

                return <NoteList notes={filterNotes}  />

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
