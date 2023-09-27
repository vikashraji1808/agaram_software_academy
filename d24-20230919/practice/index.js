
function log(){
    let email_id= document.getElementById('email').value
    let id_password= document.getElementById('password').value
    let id_name=document.getElementById('name').value
    
    let login_details=JSON.parse(localStorage.getItem('userdetail'))
    for(var i=0;i<login_details.length;i++){
        
        
        if(email_id==login_details[i].email && id_password==login_details[i].password){
            localStorage.setItem("loggedin",true)
            localStorage.setItem("logging",login_details[i].name)
                document.getElementById('Login').style.display='none',
                document.getElementById('home').style.display='block',
                document.getElementById('welcome').innerHTML=`welcome ${id_name}`
                
            
            
        }
        
    }

   
}

function home(){
    localStorage.removeItem("loggedin")
            document.getElementById('home').style.display='none'
            document.getElementById('Login').style.display='block'
            

            
}
function checklogin(){
    if(localStorage.getItem('loggedin')){
         a=localStorage.getItem("logging")
        document.getElementById('welcome').innerHTML=`welcome ${a}`
        document.getElementById('home').style.display='block'
        document.getElementById('Login').style.display='none'
        getdata()
        
    }
}

function regis(){
    document.getElementById('reg').style.display='block'
    document.getElementById('Login').style.display='none'


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
    document.getElementById('reg').style.display='none'
    document.getElementById('Login').style.display='block'
    

}
function getdata(){
   let getdatas=JSON.parse(localStorage.getItem("userdetail"))
    let htmldata=''
    for(var i=0;i<getdatas.length;i++){
        d=getdatas[i].email
    htmldata=htmldata+`<tr>
    <td>${getdatas[i].name}</td>
    <td>${getdatas[i].email}</td>
    <td><button type='button' id='edit' onclick='eddata()'>edit</button></td>
    <td><button type='button' id='delete' onclick='deldata("${d}")'>delete</button></td>
    </tr>`
    
    document.getElementById("table1").style.display='block'
    
}
document.getElementById('rowadding').innerHTML=htmldata;

}
function eddata(){
    document.getElementById('home').style.display='none'
    document.getElementById('edits').style.display='block'
   
}
function change(){
     y=window.d
    let upd_name=document.getElementById('new_name').value
    let upd_email=document.getElementById('new_email').value
    let upd_pass=document.getElementById('new_password').value
     updation=JSON.parse(localStorage.getItem("userdetail"))
    for(var i=0;i<updation.length;i++){
        if(updation[i].email==y){
           updation[i].email=upd_email,
           updation[i].name=upd_name,
           updation[i].password=upd_pass 
           console.log(updation[i])
        }
    }
    localStorage.setItem("userdetail",JSON.stringify(updation))
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






