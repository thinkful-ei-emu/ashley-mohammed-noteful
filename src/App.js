import React from 'react';
import Header from './components/Header'
import NoteList from './components/NoteList'
import Sidebar from './components/Sidebar'
import './App.css';
import STORE from './components/Store'



class App extends React.Component{
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
        <div className="flex-container">
        <Sidebar folders= {this.state.store.folders}/>
        <NoteList notes= {this.state.store.notes}/>        

        </div>
      
      
      </div>
    );

  }
   
  
  
}

export default App;
