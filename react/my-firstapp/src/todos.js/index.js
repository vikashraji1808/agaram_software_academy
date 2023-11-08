
import {useState} from 'react'
import AddTodo from './form'
import { Outlet, Link } from "react-router-dom";
import Header from '../header';
function Todo(props){
        let [todos,setTodo]=useState(["take medicine","take power bank","take charger"])
        
        const deleteTodo =(t)=>{
            let changevalue=todos.filter((a)=>a!=t)
            setTodo(changevalue)
        }
            return(
        <>
          <Header />

        <table>
            <tr>
                <th>order</th>
                <th>action</th>
                <th>delete</th>
            </tr>
            <tr>
                {todos.map((t,i)=>(
                      <tr>
                      <td>{i+1}</td>
                      <td>{t}</td>
                      <td><button onClick={()=>deleteTodo(t)}>delete</button></td>
                  </tr> 
                )   
                )}
            </tr>
        </table>
    <AddTodo setIteam={setTodo} Iteam={todos}/>
    {props.IsLogged.status?`"welcome"${props.IsLogged.name}`:"gest id "}
  
        </>
    )
}

export default Todo;