
import {useState} from 'react'
import AddTodo from './form'
import { Outlet, Link } from "react-router-dom";
import Header from '../header';
function Todo(){
        let [User,setUser]=useState(["barish","vikash","chrish"])
        
        const deleteTodo =(t)=>{
            let changevalue=User.filter((a)=>a!=t)
            setUser(changevalue)
        }
            return(
        <>
         <Header />
        <table>
            <tr>
                <th>order</th>
                <th>name</th>
                <th>delete</th>
            </tr>
            <tr>
                {User.map((t,i)=>(
                      <tr>
                      <td>{i+1}</td>
                      <td>{t}</td>
                      <td><button onClick={()=>deleteTodo(t)}>delete</button></td>
                  </tr> 
                )   
                )}
            </tr>
        </table>
    <AddTodo setIteam={setUser} Iteam={User}/>

        </>
    )
}

export default Todo;