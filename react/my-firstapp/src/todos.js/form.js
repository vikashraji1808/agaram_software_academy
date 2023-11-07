import {useState} from 'react'

function AddTodo(props){
    let [todo,changeTodo]=useState("")
    return(
        <>
        {todo}
        <input type="text" onKeyUp={(e)=>changeTodo(e.target.value)}/>
        <button type="button" onClick={()=>props.setIteam([...props.Iteam,todo])}>add</button>
        </>
        
    )
}
export default AddTodo;



  