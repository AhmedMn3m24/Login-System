// let userEmail = document.querySelector("#emailInput");
// let passwordInput = document.querySelector("#passwordInput");
// let emailError = document.querySelector("#EmailError");
// let passwordError = document.querySelector("#passwordError");
// let loginButton = document.querySelector("#loginbtn");

// let userAarry = JSON.parse(localStorage.getItem("users")) || [];


// loginButton.addEventListener("click", function () {
//     login()
// })
// function login() {
//     if (loginCheck() == true) {

//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "Account logged in successfully",
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     }
//     else {
//         Swal.fire({
//             position: "center",
//             icon: "error",
//             title: " Invalid email or password",
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     }
// }


// function loginCheck() {

//     for (let i = 0; i < userAarry.length; i++) {
//         if (userAarry[i].email === userEmail.value && userAarry[i].password === passwordInput.value) {
//             return true
//         } else {
//             return false
//         }

//     }
// }



// function validateEmail() {
//     let userEmailRegex = /^\S+@\S+\.\S+$/;
//     let isValid = userEmailRegex.test(userEmail.value);
//     userEmail.classList.toggle("is-valid", isValid);
//     userEmail.classList.toggle("is-invalid", !isValid);
//     emailError.classList.toggle("d-none", isValid);
// }

// function validatePassword() {
//     let passwordRegex = /^.{6,}$/;
//     let isValid = passwordRegex.test(passwordInput.value);
//     passwordInput.classList.toggle("is-valid", isValid);
//     passwordInput.classList.toggle("is-invalid", !isValid);
//     passwordError.classList.toggle("d-none", isValid);
// }
// userEmail.addEventListener("input", validateEmail);
// passwordInput.addEventListener("input", validatePassword); 




let userEmail = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let emailError = document.querySelector("#EmailError");
let passwordError = document.querySelector("#passwordError");
let loginButton = document.querySelector("#loginbtn");

let userAarry = JSON.parse(localStorage.getItem("users")) || [];

// 🔹 Login Button
loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  validateEmail();
  validatePassword();

  if (
    !userEmail.classList.contains("is-valid") ||
    !passwordInput.classList.contains("is-valid")
  ) {
    Swal.fire({
      icon: "error",
      title: "Invalid input",
      text: "Please enter valid data",
    });
    return;
  }

  if (loginCheck()) {
    // ✅ save current user
    localStorage.setItem("currentUser", userEmail.value);

    Swal.fire({
      icon: "success",
      title: "Login Success",
      timer: 1500,
      showConfirmButton: false,
    });

    // 🔥 redirect
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    Swal.fire({
      icon: "error",
      title: "Invalid email or password",
    });
  }
});

// 🔹 Check user
function loginCheck() {
  for (let i = 0; i < userAarry.length; i++) {
    if (
      userAarry[i].email === userEmail.value &&
      userAarry[i].password === passwordInput.value
    ) {
      return true;
    }
  }
  return false;
}

// 🔹 Email Validation
function validateEmail() {
  let regex = /^\S+@\S+\.\S+$/;
  let isValid = regex.test(userEmail.value);

  userEmail.classList.toggle("is-valid", isValid);
  userEmail.classList.toggle("is-invalid", !isValid);
  emailError.classList.toggle("d-none", isValid);
}

// 🔹 Password Validation
function validatePassword() {
  let regex = /^.{6,}$/;
  let isValid = regex.test(passwordInput.value);

  passwordInput.classList.toggle("is-valid", isValid);
  passwordInput.classList.toggle("is-invalid", !isValid);
  passwordError.classList.toggle("d-none", isValid);
}

// 🔹 Live validation
userEmail.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);