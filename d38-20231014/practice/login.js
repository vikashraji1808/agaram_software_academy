
function register(){
          let name= $("#name").val()
          let email= $("#email").val()
          let password= $("#password").val()
          let address= $("#address").val()
          let aadhar= $("#adhar").val()
          let phone= $("#phone").val()
          let city= $("#city").val()
          let area= $("#area").val()
          let pincode= $("#pincode").val()
console.log(name)
          $.ajax({
            type:"post",
            url:"http://agaram.academy/api/action.php",
            data:{
                request : "create_candidate",
                "name" : name,
                "email" : email,
                "password" : password,
                "aadhar": aadhar,
                "address" : address,
                "phone":phone,
                "city":city,
                "area":area,
                "pin":pincode,
            },
            success: function (res){
                console.log("success",res)
            window.location="login.html"
            },
            error:function(err){
                console.log("error",err)
            }

          })
          
}
function login(){
    // let name= $("#name").val()
    let email= $("#email").val()
    let password= $("#password").val()
    $.ajax({
        type:"post",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "candidate_login",
            "email" : email,
            "password" : password,
        },
        success: function (res){
            console.log("success",res)
        window.location="list.html"
        },
        error:function(err){
            console.log("error",err)
        }
    })
}
function allmember(){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:  "getAllMembers"
        },
        success: function (res){
            // console.log("success",res)
            let datas=JSON.parse(res)
            let data_lis=(datas.data)
            let all_data=""
            for(let i=0;i<data_lis.length;i++){
                all_data=all_data+`<tr>
                <td>${data_lis[i].id}</td>
                <td>${data_lis[i].name}</td>
                <td>${data_lis[i].email}</td>
                <td>${data_lis[i].aadhar}</td>
                <td>${data_lis[i].phone}</td>
                <td>${data_lis[i].address}</td>
                <td>${data_lis[i].city}</td>
                <td>${data_lis[i].area}</td>
                <td>${data_lis[i].pin}</td>

                </tr>`
               
            }
            console.log(all_data)
            $("#tbody_data").html(all_data)
        },
        error:function(err){
            console.log("error",err)
        }

    })
}
function regsisterpage(){
    window.location="regsiter.html"
}