// var d={name:"vikash",
//        E_mail:"vickymeenu023@gmail.com",
//        mobile_no:"7548818374",
//        soft_skills:["leadership","problem_sloving"],
//        hard_skills:["writing_skill","drawing_skill"],
//        educational_qualification:[{level:"sslc",
//                                     ins_name:"seventhday",
//                                     year:"2016-2017",
//                                     percentage:70},
//                                   {level:"hsc",
//                                   ins_name:"seventhday",
//                                   year:"2018-2019",
//                                   percentage:60},
//                                   {level:"BE_machanical",
//                                   ins_name:"rohini",
//                                   year:"2019-2023",percentage:70}],
//        experience:[{company_name:"vel_coating",
//                     experiance:2,
//                     place:"chennai",
//                     last_month:"july"}],
//        hobbies:["gym","kabbadi","game"],
//        personal_details:{fathers_name:"jamesvictor",fathers_occupation:"cooly",language_known:["tamil","english"],dob:"18.07.2001",gender:"male",martial_status:"unmarried",address:"channelkaraiperuvillai"},
//        objective:"i will work hard and my effort all for our company",
//        declaration:"I said that above  information is true"
// }
// function getedu(x){
// for (i=x.length-1;i>=0;i--){
//        console.log(i+1+"."+x[i].level)
// }}
// localStorage.setItem("name",true);
// a=localStorage.getItem("name")
// console.log(typeof(a))
// sessionStorage.setItem("name","vikash");

// getedu(d.educational_qualification)
// console.log(d.personal_details.pincode=629003)
// console.log(d.personal_details)
// console.log(d.experience[0].year=2023)
// console.log(d.experience)
// console.log(d.educational_qualification.pop(d.educational_qualification.length-1))
// console.log(d.educational_qualification)
// console.log(d.mobile_no=7548818374)
// console.log(d)

// coverting array to string:
var list=["apple","orange","greenapple"];
var stringlist=JSON.stringify(list);
localStorage.setItem("fruits",stringlist);
// coverting string to array:
b=localStorage.getItem("fruits");
blist=JSON.parse(b)
console.log(blist[2])











