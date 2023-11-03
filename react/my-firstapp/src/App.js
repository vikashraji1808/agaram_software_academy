
import './App.css';
import {useState} from 'react';

import Header from './header';



function App() {
  let [name,changeName]=useState("agaram")
  return (
    <div className="App">
      <Header name={name} place="nagercoil" />
    <button onClick={()=>(changeName("welcome to agram software academy"))}>change name </button>
    </div>
  );
}

export default App;
