// var resumebuilder={};
//  function resume(e,pkey_val){
//     if(pkey_val){
//         resumebuilder[pkey_val]={}
//         resumebuilder[pkey_val][e.name]=e.value
//     }else{
//         resumebuilder[e.name] = e.value
//     }
   
//    console.log(resumebuilder)
//  }

 let resumeDetails={};
 let eachdata={};

function resume(e,pkey_val){
    if(pkey_val){
        if(resumeDetails[pkey_val]){
            resumeDetails[pkey_val]={...resumeDetails[pkey_val]}
        }
        else{
            resumeDetails[pkey_val]={}
        }
        resumeDetails[pkey_val][e.name]=e.value
    }
    else{
        resumeDetails[e.name]=e.value
    }
    
dispaly()
}
function add_skill(e,pkey_val){
    if(!resumeDetails[e]){
        resumeDetails[e]=[]
    }
    resumeDetails[e].push(document.getElementById(pkey_val).value )

    document.getElementById(pkey_val).value=""
    var skill_list=''
    for(i=0;i<resumeDetails[e].length;i++){
        var list=resumeDetails[e][i]
        // console.log(list)
        skill_list+=`<h6>${list}<button type="button"onclick="">x</button></h6>`
        
    }
    document.getElementById('lists').innerHTML=skill_list;                                                      

    dispaly()

}
function add_lang(e,pkey_val){
    if(!resumeDetails[e]){
        resumeDetails[e]=[]
    }
    resumeDetails[e].push(document.getElementById(pkey_val).value )
    document.getElementById(pkey_val).value=""
    var lang_lists=''
    for(i=0;i<resumeDetails[e].length;i++){
        var list=resumeDetails[e][i]
        // console.log(list)
        lang_lists+=`<h6>${list}<button type="button"onclick="">x</button></h6>`
        
    }
document.getElementById('lang_list').innerHTML=lang_lists;

    dispaly()

}
function dispaly(){
    document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}
function setdata(g){
    eachdata[g.name]=g.value;
}
function edu(e,y){
    if(!resumeDetails[e]){
        resumeDetails[e]=[]
    }
    resumeDetails[e].push(eachdata)
    
    document.getElementById(y).innerHTML=JSON.stringify(eachdata)
    let key=Object.keys(eachdata)
    for(i=0;i<key.length;i++){
        let data=key[i]
        document.getElementById(data).value="";
    }
    var skill_list=''
    for(i=0;i<resumeDetails[e].length;i++){
        var list=resumeDetails[e][i]
        // console.log(list)
        skill_list+=`<h6>${JSON.stringify(list)}<button type="button"onclick="">x</button></h6>`
        
    }
document.getElementById(y).innerHTML=skill_list;

    dispaly()
}

function create(){
  
    $.ajax({
        type :"post",
        url:"http://agaram.academy/api/action.php",
        data :
        {
        request :"create_resume",
        user :"vikash",
        resume:resumeDetails
        
        },
        success:function(res){
            window.location="index.html"
            get_data()
        },
        error:function(err){
            console.log(err)
        }

    });
    
   

}
function get_data(){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "get_user_resume",
            user : "vikash",
        },
        success:function(res){
          
            let data_li=JSON.parse(res)
            let data_li_data=(data_li.data)
            console.log(data_li)
            let eachdata=""
            for(let i=0;i<data_li_data.length;i++){
                eachdata=eachdata+`<tr>
    
                <td>${data_li_data[i].id}</td>
                <td>${data_li_data[i].user}</td>
                <td><button type="button" onclick="delete_data('${data_li_data[i].id}')">delete</button>
                <td><a href="list.html?id=${data_li_data[i].id}">link</a></td>
                </tr>`
            }
            $("#tbody_data").html(eachdata)
        },
        error:function(err){
            console.log(err)
        }

    });
}

function delete_data(i){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
                    request : "delete_user_resume",
                    user : "vikash",
                    id:i
        },
        success:function(res){
            let datas=JSON.parse(res)
            
            console.log(datas)
            get_data()
            
        },
        error:function(err){
            console.log(err)
        }

    });

}
function list_data(g){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "get_resume_by_id",
            user : "vikash",
            id:g
        },
        success:function(res){
            let datas=JSON.parse(res)
            let chan_obj=JSON.parse(datas.data.data)
            console.log(chan_obj)
            $("#name").html(chan_obj.name)
            $("#email").html(chan_obj.email)
            $("#objective").html(chan_obj.objective)
            $("#fathername").html(chan_obj.personal_details.father_name)
            $("#mothername").html(chan_obj.personal_details.mother_name)
            $("#address").html(chan_obj.personal_details.address)
            $("#gender").html(chan_obj.personal_details.gender)
            $("#dob").html(chan_obj.personal_details.dob)
            $("#phone").html(chan_obj.personal_details.phone)
            let skill_lists=chan_obj.skills;
            console.log(skill_lists)
            let skill_tab=""
            for(let i=0;i<skill_lists.length;i++){
                skill_tab=skill_tab+`<li>'${skill_lists[i]}'</li>`
            }
           $("#skill_li").html(skill_tab)

           let lang_lists=chan_obj.language;
            console.log(lang_lists)
            let lang_tab=""
           for(let i=0;i<lang_lists.length;i++){
            lang_tab=lang_tab+`<li>'${lang_lists[i]}'</li>`
        }
       $("#lang_li").html(lang_tab)

       let edulist=chan_obj.education 
       console.log(edulist)
      let edu_tab=""
      for(let i=0;i<edulist.length;i++){
        edu_tab=edu_tab+`<tr>
        <td>${edulist[i].inst_name}</td>
        <td>${edulist[i].inst_level}</td>
        <td>${edulist[i].inst_year}</td>
        <td>${edulist[i].inst_percentage}</td>`
      }
        $("#edu_tab").html(edu_tab)
        },
        error:function(err){
            console.log(err)
        }
 });
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}
function download() {
    alert('ok')
const page = document.getElementById('downld');
var opt = {
margin:
1,
filename: 'Demopdf.pdf',
image:
{ type: 'jpeg', quality: 0.98 },
html2canvas:
{ scale: 2 },
jsPDF:
{ unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}





// function nextpage(){
//     window.location="index.html"
// }