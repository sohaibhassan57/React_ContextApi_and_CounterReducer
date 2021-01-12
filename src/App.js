import { useState } from 'react';
import './App.css';
import Parent from "./parent"
import countercontext from './countercontext';


function App() {
 
 let counter=useState(25);

 
  return (

    <countercontext.Provider value={counter}>
    <div className="App">
      
     <Parent  username="sohaib"/>
    </div>
    </countercontext.Provider>
  );
}

export default App;
