
import {useState} from 'react'
import AddTodo from './form'
function Todo(){
        let [todos,setTodo]=useState(["take medicine","take power bank","take charger"])
        
        const deleteTodo =(t)=>{
            let changevalue=todos.filter((a)=>a!=t)
            setTodo(changevalue)
        }
            return(
        <>
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
        </>
    )
}

export default Todo;