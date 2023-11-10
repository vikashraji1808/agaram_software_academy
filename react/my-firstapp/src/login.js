import { useNavigate, Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from "axios";  


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
    function getData(){
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
          }).then(function(response){
                console.log(response.data)
          })
    }
    function postData(){
        axios({
            method: 'post',
            url:'http://agaram.academy/api/action.php',
            data: {
                request : "candidate_login",
                email : "vikash@gmail.com",
                password :12345
                }
          }).then(function(response){
            console.log(response)
      });
    }
    useEffect(()=>{
        console.log(loginData.email);
    },[loginData.email])

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
        <button type="button" onClick={()=>getData()}>getData</button>
        <button type="button" onClick={()=>postData()}>postData</button>


   
        </>
    )
}

export default Login