
  
function log(){
    let email_id= document.getElementById('email').value
    let id_password= document.getElementById('password').value
  
    
    let login_details=JSON.parse(localStorage.getItem('userdetail'))
    for(var i=0;i<login_details.length;i++){
        
        na=login_details[i].name
        if(email_id==login_details[i].email && id_password==login_details[i].password){
            localStorage.setItem("loggedin",true)
            localStorage.setItem("logging",na)
            window.location="home.html"
                document.getElementById('welcome').innerHTML=`welcome ${na}`
                
            
            
        }
        
    }
    

   
}

function home(){
    localStorage.removeItem("loggedin")
            window.location="login.html"         
}

function checklogin(){
    if(localStorage.getItem('loggedin')){
         a=localStorage.getItem("logging")
        document.getElementById('welcome').innerHTML=`welcome ${a}`
        // window.location="home.html"
        getdata()
        
    }
}

function regis(){
  
    window.location="register.html"

}
function getid(){
    let user_name=document.getElementById('reg_name').value
    let user_email=document.getElementById('reg_email').value
    let user_pass=document.getElementById('reg_pass').value
    if(localStorage.getItem('userdetail')){
     localdata=JSON.parse(localStorage.getItem('userdetail'))
     localdata.push({
        name:user_name,
        email:user_email,
        password:user_pass})
     localStorage.setItem("userdetail",JSON.stringify(localdata))
    }else{
    localdata=[]
     localdata.push({
        name:user_name,
        email:user_email,
        password:user_pass})
    }
    localStorage.setItem("userdetail",JSON.stringify(localdata))
    alert("register successfully")
   window.location="login.html"
    

}
function getdata(){
   let getdatas=JSON.parse(localStorage.getItem("userdetail"))
    let htmldata=''
    for(var i=0;i<getdatas.length;i++){
        d=getdatas[i].email
    htmldata=htmldata+`<tr>
    <td id="upname+'${i}'">${getdatas[i].name}</td>
    <td id="upmail+'${i}'">${getdatas[i].email}</td>
    <td><button type='button' id='edit' onclick='edit("${d}")'>edit</button></td>
    <td><button type='button' id='delete' onclick='deldata("${d}")'>delete</button></td>
    </tr>`
    
    document.getElementById("table1").style.display='block'
    
}
document.getElementById('rowadding').innerHTML=htmldata;

}
function edit(e){
    let e_detail=JSON.parse(localStorage.getItem("userdetail"))
    for(var i=0;i<e_detail.length;i++){
        if(e_detail[i].email==e){
            let e_use=prompt("New Username",`${e_detail[i].name}`)
            let e_usen=prompt("New Mail",`${e_detail[i].email}`)
            if(e_use!=e_detail[i].name){
                document.getElementById(`upname+'${i}'`).innerHTML=e_use
            }
            if(e_usen!=e_detail[i].email){
                document.getElementById(`upmail+'${i}'`).innerHTML=e_usen
            }
                e_detail[i]=({
                    email:e_usen,
                    name:e_use,
                    password:e_detail[i].password
                })
            }
    }
    localStorage.setItem("userdetail",JSON.stringify(e_detail))
    checklogin()
}
function deldata(a){
    let delete_data=JSON.parse(localStorage.getItem("userdetail"))
    let deleitem=[]
    for(var i=0;i<delete_data.length;i++){
        if(delete_data[i].email!=a){
            deleitem.push(delete_data[i])
        }
        
    }
  localStorage.setItem("userdetail",JSON.stringify(deleitem))
  alert("you want to delete now")
  getdata()

}
function secure(){
   if(!localStorage.getItem('loggedin')){
    window.location='login.html'
   }

}
