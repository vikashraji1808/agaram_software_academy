// ---------------Authentication_Code--------------------

var auth = firebase.auth()
console.log(auth)
const registerForm = () => {
  var Name = document.getElementById("reg_user").value;
  var email = document.getElementById("reg_mail").value;
  var password = document.getElementById("reg_password").value;
  auth.createUserWithEmailAndPassword(email, password).then((result) => {
    console.log(result)
    register()
  })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      alert(error.message)
    })
}


const loginForm = () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      login()
      console.log(result)
    })
    .catch((error) => {
      alert("Please Register First")
      window.location = "register.html"
      console.log(error.code);
      console.log(error.message);

    });
}


const dele = () => {
  const user = firebase.auth().currentUser;
  user.delete().then(() => {
    // User deleted.
    alert("Account Deleted Successfully")
    logout()
    del()
  }).catch((error) => {
  });
}

function authUpdate() {
  window.location = "authUp.html"

}

function updateUserData() {
  var userNow = firebase.auth().currentUser;
  var u_name = document.getElementById("a_name").value
  var u_email = document.getElementById("a_mail").value
  var u_password = document.getElementById("a_password").value
  userNow.updateProfile({
    name: u_name,
    email: u_email,
    password: u_password,
  }).then(function () {
    var name = userNow.name;
    var email = userNow.email;
    var password = userNow.password;
  }, function (error) {
    console.log(error)
  });
}

























