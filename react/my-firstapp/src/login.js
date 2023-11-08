import { useNavigate, Link } from "react-router-dom";
import {useState} from 'react';


function Login(props){
    const navigate = useNavigate();
    let [loginData,setLogin]=useState({
        email:"vikash@gmail.com",
        password: 12345
    })
     
    function checklogin(){
        if(loginData.email=="vikash@gmail.com" && loginData.password == 12345){
            navigate('/todos')
            props.setIsLogged({status:true,name:loginData.email})
        }
    }


    return(
     
        <>
          {JSON.stringify(loginData)}
          <br></br>
          <br></br>

        <label>Email</label>
        <input type="text" onKeyUp={(e)=>setLogin({
            ...loginData,
            email : e.target.value
        })}/>
        <br></br>
        <label>Password</label>
        <input type="text" onKeyUp={(e)=>setLogin({
            ...loginData,
            password : e.target.value
        })}/>
        <br></br>
        <button type="button" onClick={()=>checklogin()}>login</button>
   
        </>
    )
}

export default Login