const firebaseConfig = {
    apiKey: "AIzaSyBjenUUimhmwbGMu1olgC2JWZJRCSMAheE",
    authDomain: "loginform-ffc0a.firebaseapp.com",
    databaseURL: "https://loginform-ffc0a-default-rtdb.firebaseio.com",
    projectId: "loginform-ffc0a",
    storageBucket: "loginform-ffc0a.appspot.com",
    messagingSenderId: "354236455011",
    appId: "1:354236455011:web:18bc859faf8297619a4056"
};
firebase.initializeApp(firebaseConfig);
var db=firebase.database()
var dataRef = db.ref("registeredUsers");


function register(){
    console.log('register function called');
    let reg_name=document.getElementById("reg_name").value
    let reg_email=document.getElementById("reg_email").value
    let reg_password=document.getElementById("reg_pass").value

    let reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(snapshot) {
           let data = snapshot.val();
            console.log(data);
            if(data){
                data.push(reg_data);
                db.ref("registeredUsers").set(data);
            }
            else{
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
            window.location="login.html"
        })
        
}

function login(){

    let user_detail=document.getElementById("email").value
    let Password=document.getElementById("password").value
        dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                let isUserAlive = false;
                for(i=0;i<data.length;i++){

                    if ((data[i].email===user_detail) && (data[i].password===Password))
                    {
                        alert("login successfully");
                        isUserAlive = true
                        localStorage.setItem("loggedin",true)
                        localStorage.setItem("logging",data[i].name)
                        window.location="home.html";
                        break;
                    }
                }
                !isUserAlive&& alert('Please Register First');
                
            }

            
        })
}
var alldatas=[];
function getiteam(){
    dataRef.once('value')
    .then(function(res) {
    alldatas=res.val();
    getdata();
})
}

  
// function log(){
//     let email_id= document.getElementById('email').value
//     let id_password= document.getElementById('password').value
  
    
//     let login_details=JSON.parse(localStorage.getItem('userdetail'))
//     for(var i=0;i<login_details.length;i++){
        
//         na=login_details[i].name
//         if(email_id==login_details[i].email && id_password==login_details[i].password){
//             localStorage.setItem("loggedin",true)
//             localStorage.setItem("logging",na)
//             window.location="home.html"
//                 document.getElementById('welcome').innerHTML=`welcome ${na}`
                
            
            
//         }
        
//     }
    

   
// }

function home(){
    localStorage.removeItem("loggedin")
            window.location="login.html"         
}

function checklogin(){
    if(localStorage.getItem('loggedin')){
         a=localStorage.getItem("logging")
        document.getElementById('welcome').innerHTML=`welcome ${a}`
        // window.location="home.html"
        getiteam()
        
    }
}

function regis(){
  
    window.location="register.html"

}
// function getid(){
//     let user_name=document.getElementById('reg_name').value
//     let user_email=document.getElementById('reg_email').value
//     let user_pass=document.getElementById('reg_pass').value
//     if(localStorage.getItem('userdetail')){
//      localdata=JSON.parse(localStorage.getItem('userdetail'))
//      localdata.push({
//         name:user_name,
//         email:user_email,
//         password:user_pass})
//      localStorage.setItem("userdetail",JSON.stringify(localdata))
//     }else{
//     localdata=[]
//      localdata.push({
//         name:user_name,
//         email:user_email,
//         password:user_pass})
//     }
//     localStorage.setItem("userdetail",JSON.stringify(localdata))
//     alert("register successfully")
//    window.location="login.html"
    

// }
function getdata(){
//    let getdatas=JSON.parse(localStorage.getItem("userdetail"))
    let htmldata=''
    for(var i=0;i<alldatas.length;i++){
        d=alldatas[i].email
    htmldata=htmldata+`<tr>
    <td id="upname+'${i}'">${alldatas[i].name}</td>
    <td id="upmail+'${i}'">${alldatas[i].email}</td>
    <td><button type='button' id='edit' onclick='edit("${d}")'>edit</button></td>
    <td><button type='button' id='delete' onclick='deldata("${d}")'>delete</button></td>
    </tr>`
    
    // document.getElementById("table1").style.display='block'
    
}
document.getElementById('rowadding').innerHTML=htmldata;

}
function edit(e){
    // let e_detail=JSON.parse(localStorage.getItem("userdetail"))
    for(var i=0;i<alldatas.length;i++){
        if(alldatas[i].email==e){
            let e_use=prompt("New Username",`${alldatas[i].name}`)
            let e_usen=prompt("New Mail",`${alldatas[i].email}`)
            if(e_use!=alldatas[i].name){
                document.getElementById(`upname+'${i}'`).innerHTML=e_use
            }
            if(e_usen!=alldatas[i].email){
                document.getElementById(`upmail+'${i}'`).innerHTML=e_usen
            }
            alldatas[i]=({
                    email:e_usen,
                    name:e_use,
                    password:alldatas[i].password
                })
            }
    }
    db.ref("registeredUsers").set(alldatas);
    // localStorage.setItem("userdetail",JSON.stringify(e_detail))
    checklogin()
}
function deldata(a){
    // let delete_data=JSON.parse(localStorage.getItem("userdetail"))
    let deleitem=[]
    for(var i=0;i<alldatas.length;i++){
        if(alldatas[i].email!=a){
            deleitem.push(alldatas[i])
        }
        
    }
//   localStorage.setItem("userdetail",JSON.stringify(deleitem))
db.ref("registeredUsers").set(deleitem);
  alert("you want to delete now")
  getiteam()

}
function secure(){
   if(!localStorage.getItem('loggedin')){
    window.location='login.html'
   }

}
