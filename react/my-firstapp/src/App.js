
import './App.css';
import {useState} from 'react';
// import Header from './header';
import Todos from './todos.js/index';
import User from './todos.js/user';
import Login from './login';
import Header from './header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






function App() {
  let [name,changeName]=useState("agaram")
  let [IsLogged,setIsLogged]=useState({
    status:false,
    name:""
  })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
    {
      path: "/login",
      element: <Login IsLogged={IsLogged} setIsLogged={setIsLogged}/>,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/todos",
      element: <Todos IsLogged={IsLogged} setIsLogged={setIsLogged}/>,
    },
  ]);
  return (
    <div className="App">
      {/* <Header name={name} place="nagercoil" newname={changeName} /> */}
      {/* < Todos />
      <User /> */}
      <RouterProvider  router={router}/>
      


     
    </div>
  );
}

export default App;



