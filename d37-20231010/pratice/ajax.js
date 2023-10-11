function checkdata(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:"",
        success:function(res){
            console.log("respone",res)
            let eachdata=""
            for(let i=0;i<res.length;i++){
                eachdata=eachdata+`<tr>
                <td>${res[i].body}</td>
                <td>${res[i].id}</td>
                <td><button type="button" onclick="display_id('${res[i].userId}')">'${res[i].title}'</button></td>
                <td>${res[i].userId}</td>
                </tr>`
            }
            $("#tbody_data").html(eachdata)
        },
   
        error:function(err){
            console.log("error",err)
        }
     
      });
      addpost()
}
function display_id(title){
    alert(title)
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${title}/comments`,
        data:"",
        success:function(resp){
            console.log("respone",resp)
        },
        error:function(erro){
            console.log("error",erro)
        }

    });
}
function addpost(){
    $.ajax({
        type:"post",
        uri:"https://jsonplaceholder.typicode.com/posts",
        data:{
            "userId": 1,
            "title": "agaram softwore academy",
            "body": "hi welcome"
          },
        success:function(respone){
            console.log("respone",respone)
        },
        error:function(error){
            console.log("error",error)
        }
    });
}
