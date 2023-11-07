
import './App.css';
import {useState} from 'react';
// import Header from './header';
import Todos from './todos.js/index';
import User from './todos.js/user'





function App() {
  let [name,changeName]=useState("agaram")
  return (
    <div className="App">
      {/* <Header name={name} place="nagercoil" newname={changeName} /> */}
      < Todos />
      <User />
     
    </div>
  );
}

export default App;



