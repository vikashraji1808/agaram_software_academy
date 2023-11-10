
import {useEffect, useState} from 'react'
import AddTodo from './form'
import { Outlet, Link } from "react-router-dom";
import Header from '../header';
function Todo(){
        // let [User,setUser]=useState(["barish","vikash","chrish"])
        
        // const deleteTodo =(t)=>{
        //     let changevalue=User.filter((a)=>a!=t)
        //     setUser(changevalue)
        // }
        let [timer,setTimer]=useState(0);
        let[IsTimerStart,setTimerstart]=useState(false)
        useEffect(()=>{
            if(IsTimerStart){
                setTimer(timer+1)
            }
        },[timer,IsTimerStart])
            return(
        <>
         {/* <Header /> */}
        {/* <table>
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
        </table> */}
    {/* <AddTodo setIteam={setUser} Iteam={User}/> */}
    <p>Timer</p>
    <code>{timer}</code><br></br>
    <button type="button" onClick={()=>setTimerstart(!IsTimerStart)}>{IsTimerStart? 'stop':'start'}</button>
    <button type="button" onClick={async ()=>{await setTimerstart(false);setTimer(0)}}>reset</button>

        </>
    )
}

export default Todo;