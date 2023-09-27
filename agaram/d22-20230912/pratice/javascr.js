var a="agaram";
var b=5;
var c=[1,2,,3,4]
var d={name:"vikash",
       E_mail:"vickymeenu023@gmail.com",
       mobile_no:"7548818374",
       soft_skills:["leadership","problem_sloving"],
       hard_skills:["writing_skill","drawing_skill"],
       educational_qualification:[{level:"sslc",
                                    ins_name:"seventhday",
                                    year:"2016-2017",
                                    percentage:70},
                                  {level:"hsc",
                                  ins_name:"seventhday",
                                  year:"2018-2019",
                                  percentage:60},
                                  {level:"BE_machanical",
                                  ins_name:"rohini",
                                  year:"2019-2023",percentage:70}],
       experience:[{company_name:"vel_coating",
                    experiance:2,
                    place:"chennai",
                    last_month:"july"}],
       hobbies:["gym","kabbadi","game"],
       personal_details:{fathers_name:"jamesvictor",fathers_occupation:"cooly",language_known:["tamil","english"],dob:"18.07.2001",gender:"male",martial_status:"unmarried",address:"channelkaraiperuvillai"},
       objective:"i will work hard and my effort all for our company",
       declaration:"I said that above  information is true"
}
let e =["sundy","monday","tuesday"];

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(e[1]);
// console.log(e.length);
// console.log( e[e.length-1]);
e[2]="wednesday";
e.push("thrusday")
e.pop(e.length-2)

console.log(e);