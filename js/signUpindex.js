var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPass = document.querySelector("#userPass");

var signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", function () {
  addUser();
});

var userList = [];

function addUser() {
  if (validateInputs() == true && validateEmailNotEmpty() == true && checkEmailExist()==true) {
    var user = {
      name: userName.value,
      email: userEmail.value,
      password: userPass.value,
    };
    userList.push(user);

    localStorage.setItem("userKey", JSON.stringify(userList));
    location.href="../quiz.html"
  }
}
console.log(localStorage.getItem("userKey"));

function validateInputs() {
  var regex = /^[A-Za-z0-9 @\.]+$/;
  if (
    regex.test(userName.value) == true &&
    regex.test(userEmail.value) == true &&
    regex.test(userPass.value) == true
  ) {
    document.getElementById("emptyInputs").classList.add("d-none");
    return true;
  } else {
    document.getElementById("emptyInputs").classList.remove("d-none");
    return false;
  }
}

function validateEmailNotEmpty() {
  var regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
  if (regex.test(userEmail.value) == true) {
    document.getElementById("invalidEmail").classList.add("d-none");
    return true;
  } else {
    document.getElementById("invalidEmail").classList.remove("d-none");
    return false;
  }
}

function checkEmailExist() {


 var emailInput = userEmail.value;
if (localStorage.getItem("userKey") != null) {
  userList = JSON.parse(localStorage.getItem("userKey"));

  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email != emailInput) {
      document.getElementById("reservedEmail").classList.add("d-none");
      return true;
    } else {
      document.getElementById("reservedEmail").classList.remove("d-none");
      console.log("founded");
      return false;
    }
  }
}
else{
  return true
}
}