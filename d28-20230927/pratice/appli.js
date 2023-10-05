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

// ---------------Authentication_Code--------------------

var auth = firebase.auth()
console.log(auth)
function registerForm(){
  var Name = document.getElementById("reg_name").value;
  var email = document.getElementById("reg_email").value;
  var password = document.getElementById("reg_pass").value;
  auth.createUserWithEmailAndPassword(email, password).then((result) => {
    console.log(result)
    // register()
    alert("resgister sucess")
    window.location="login.html"
  })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.message)
    })
}
function reg(){
  window.location="register.html"
}


function loginForm(){
  
  var email = document.getElementById("email").value;
  // alert(email)
  var password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      // login()
      alert("login sucessful")
      window.location="home.html"
      console.log(result)
    })
    .catch((error) => {
      alert("Please Register First")
      window.location = "register.html"
      console.log(error.code);
      console.log(error.message);

    });
}


function del(){
  const user = firebase.auth().currentUser;
  user.delete().then(() => {
    // User deleted.
    alert("Account Deleted Successfully")
    window.location="login.html"
  }).catch((error) => {
  });
}

// function authUpdate() {
//   window.location = "authUp.html"

// }

// function updateUserData() {
//   var userNow = firebase.auth().currentUser;
//   var u_name = document.getElementById("a_name").value
//   var u_email = document.getElementById("a_mail").value
//   var u_password = document.getElementById("a_password").value
//   userNow.updateProfile({
//     name: u_name,
//     email: u_email,
//     password: u_password,
//   }).then(function () {
//     var name = userNow.name;
//     var email = userNow.email;
//     var password = userNow.password;
//   }, function (error) {
//     console.log(error)
//   });
// }

























