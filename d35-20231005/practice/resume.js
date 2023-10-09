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
        skill_list+=`<h6>${list}<button type="button"onclick="del('${list}')">x</button></h6>`
        
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
        lang_lists+=`<h6>${list}<button type="button"onclick="del('${lang_list}')">x</button></h6>`
        
    }
document.getElementById('lang_list').innerHTML=lang_lists;

    dispaly()

}
// function del(a,b,c){
//     let data = [...resumeDetails[a]]
//     let new_data=[]
//     for (i = 0; i < data.length; i++) {
//         if (data[i] != b){
//             new_data.push(data[i])

//         }
//     }
//     resumeDetails[a]=new_data
//     display()
//     add_skill(a,c)
// }


function dispaly(){
    document.getElementById("display").innerHTML=JSON.stringify(resumeDetails,undefined,2)
}

// function delt(p_key,ele,skil){
//     let data = [...user_details[p_key]]
//     let new_data=[]
//     for (i = 0; i < data.length; i++) {
//         if (data[i] != ele){
//             new_data.push(data[i])

//         }
//     }
//     user_details[p_key]=new_data
    
//     display()
//     handle(p_key,skil)
// }
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
        skill_list+=`<h6>${JSON.stringify(list)}<button type="button"onclick="del()">x</button></h6>`
        
    }
document.getElementById(y).innerHTML=skill_list;

    dispaly()
}


