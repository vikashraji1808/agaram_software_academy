
let resumeDetails = {};
let eachdata = {};

function resume(e, pkey_val) {
    if (pkey_val) {
        if (resumeDetails[pkey_val]) {
            resumeDetails[pkey_val] = { ...resumeDetails[pkey_val] }
        }
        else {
            resumeDetails[pkey_val] = {}
        }
        resumeDetails[pkey_val][e.name] = e.value
    }
    else {
        resumeDetails[e.name] = e.value
    }

    display()
}
function add(pkey, key_val) {
    if (!resumeDetails[pkey]) {
        resumeDetails[pkey] = []
    }
    resumeDetails[pkey].push(document.getElementById(key_val).value)

    document.getElementById(key_val).value = ""
    display()
    listarray(pkey)

}
function listarray(pkey) {
    var skill_list = ''
    for (i = 0; i < resumeDetails[pkey].length; i++) {
        var list1 = resumeDetails[pkey][i]
        // console.log(list)
        skill_list += `<h6>${list1}<button type="button" onclick="del('${list1}','${pkey}')">x</button></h6>`

    }
    document.getElementById(pkey).innerHTML =skill_list;

    display()
}
function del(ls, pkey) {
    let all_list = resumeDetails[pkey];
    let all_datali = [];
    console.log(all_datali)
    for (let i = 0; i < all_list.length; i++) {
        if (ls != all_list[i]) {
            all_datali.push(all_list[i])
        }

    }
    console.log(all_datali)
    resumeDetails[pkey] = all_datali
    display()
    // add(pkey, null, ids)
    listarray(pkey)
}

function display() {
    document.getElementById("display").innerHTML = JSON.stringify(resumeDetails, undefined, 2)
}
function setdata(g) {
    eachdata[g.name] = g.value;
}
function edu(pkey) {
    if (!resumeDetails[pkey]) {
        resumeDetails[pkey] = []
    }
    resumeDetails[pkey].push(eachdata)

    // document.getElementById(i).innerHTML = JSON.stringify(eachdata)
    display_edu(resumeDetails[pkey],pkey)
    let key = Object.keys(eachdata)
    for (i = 0; i < key.length; i++) {
        let data = key[i]
        document.getElementById(data).value = "";
    }
    eachdata = {}

    display()
    // display_edu(pkey,id)
}
function display_edu(edudetail,pkey) {
    console.log(edudetail)
    var skill_list = ''
    for (i = 0; i < edudetail.length; i++) {
        // var list = resumeDetails[pkey][i]
       if(pkey=="education"){

        skill_list = skill_list + `<tr>
                <td>${edudetail[i].inst_name}</td>
                <td>${edudetail[i].inst_level}</td>
                <td>${edudetail[i].inst_year}</td>
                <td>${edudetail[i].inst_percentage}</td>
                <td><button type="button" onclick="dt('${i}','${pkey}')">X</button>
                </tr>`
       }
       else{
        skill_list = skill_list + `<tr>
        <td>${edudetail[i].company}</td>
        <td>${edudetail[i].role}</td>
        <td>${edudetail[i].year}</td>
        <td>${edudetail[i].package}</td>
        <td><button type="button" onclick="dt('${i}','${pkey}')">X</button>
        </tr>`

       }

    }

    document.getElementById(pkey).innerHTML = skill_list;

    display()
}
function dt(todel,pkey){
    console.log(todel)
    console.log(pkey)
let details=resumeDetails[pkey]

let all_lists = [];
for(let i=0;i<details.length;i++){
    // console.log(details[i])
if(i!=todel){
    all_lists.push(details[i])

}
}
resumeDetails[pkey]=all_lists
console.log(all_lists)
display_edu( resumeDetails[pkey],pkey)
display()


}

function create() {

    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",
        data:
        {
            request: "create_resume",
            user: "vikash",
            resume: resumeDetails

        },
        success: function (res) {
            window.location = "index.html"

        },
        error: function (err) {
            console.log(err)
        }


    });
}
function get_data() {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_user_resume",
            user: "vikash",
        },
        success: function (res) {

            let data_li = JSON.parse(res)
            let data_li_data = (data_li.data)
            console.log(data_li)
            let eachdata = ""
            for (let i = 0; i < data_li_data.length; i++) {
                eachdata = eachdata + `<tr>
    
                <td>${data_li_data[i].id}</td>
                <td>${data_li_data[i].user}</td>
                <td><button type="button" onclick="delete_data('${data_li_data[i].id}')">delete</button>
                <td><a href="list.html?id=${data_li_data[i].id}">link</a></td>
                </tr>`
            }
            $("#tbody_data").html(eachdata)
        },
        error: function (err) {
            console.log(err)
        }

    });
}

function delete_data(i) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "delete_user_resume",
            user: "vikash",
            id: i
        },
        success: function (res) {
            let datas = JSON.parse(res)

            console.log(datas)
            get_data()

        },
        error: function (err) {
            console.log(err)
        }

    });

}
function list_data(g) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_resume_by_id",
            user: "vikash",
            id: g
        },
        success: function (res) {
            let datas = JSON.parse(res)
            let chan_obj = JSON.parse(datas.data.data)
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
            let skill_lists = chan_obj.skills;
            let skill_tab = []
            for (let i = 0; i < skill_lists.length; i++) {
                skill_tab = skill_tab + `<li>${skill_lists[i]}</li>`
            }
            $("#skill_li").html(skill_tab)

            let lang_lists = chan_obj.language;
            let lang_tab =[]
            for (let i = 0; i < lang_lists.length; i++) {
                lang_tab = lang_tab + `<li>${lang_lists[i]}</li>`
            }
            $("#lang_li").html(lang_tab)

            let proj_li=chan_obj.project;
            let proj_tab="";
            for(let i=0;i<proj_li.length;i++){
             proj_tab=proj_tab+`<li>${proj_li[i]}</li>`
            }
            $("#project").html(proj_tab)

            let edulist = chan_obj.education
            let edu_tab = ""
            for (let i = 0; i < edulist.length; i++) {
                edu_tab = edu_tab + `<tr>
        <td>${edulist[i].inst_name}</td>
        <td>${edulist[i].inst_level}</td>
        <td>${edulist[i].inst_year}</td>
        <td>${edulist[i].inst_percentage}</td>`
            }
            $("#edu_tab").html(edu_tab)

            let explist = chan_obj.experiance
            let exp_tab = ""
            for (let i = 0; i < explist.length; i++) {
                exp_tab = exp_tab + `<tr>
        <td>${explist[i].company}</td>
        <td>${explist[i].role}</td>
        <td>${explist[i].year}</td>
        <td>${explist[i].package}</td>`
            }
            $("#exp_tab").html(exp_tab)

        },
        error: function (err) {
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
    html2pdf().set(opt).from(page).save();
}





// function nextpage(){
//     window.location="index.html"
// }