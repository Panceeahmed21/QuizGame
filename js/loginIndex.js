var userEmail = document.querySelector("#userEmailInput");
var userPass = document.querySelector("#userPassInput");

var loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", function () {
  checkData();
});

var userData = [];
if (localStorage.getItem("userKey") != null) {
  userData = JSON.parse(localStorage.getItem("userKey"));
}
console.log(userData);
function checkData() {
  if (validateInputsNotEmpty() == true) {
    for (var i = 0; i < userData.length; i++) {
      if (
        userEmail.value == userData[i].email &&
        userPass.value == userData[i].password
      ) {
        console.log(userEmail.value == userData[i].email);
        console.log(userPass.value == userData[i].password);
        document.getElementById("incorrectData").classList.add("d-none");
        location.href="../quiz.html"
        break;
      } else {
        document.getElementById("incorrectData").classList.remove("d-none");
      }
    }

  }
}

function validateInputsNotEmpty() {
  var regex = /^[A-Za-z0-9 @\.]+$/;
  if (
    regex.test(userEmail.value) == true &&
    regex.test(userPass.value) == true
  ) {
    document.getElementById("emptyInputsForLogin").classList.add("d-none");
    return true;
  } else {
    document.getElementById("emptyInputsForLogin").classList.remove("d-none");
    return false;
  }
}


