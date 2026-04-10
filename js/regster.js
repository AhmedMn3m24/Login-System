
let username = document.querySelector("#userNameInput");
let userEmail = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let signUpButton = document.querySelector("#signUpBtn");

let nameError = document.querySelector("#userNameErr");
let emailError = document.querySelector("#EmailError");
let passwordError = document.querySelector("#passwordError");

let userAarry = JSON.parse(localStorage.getItem("users")) || [];

// 🔹 Events
signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  signUp();
});

username.addEventListener("input", validateUserName);
userEmail.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// 🔹 Sign Up Function
function signUp() {
  validateUserName();
  validateEmail();
  validatePassword();

  // empty check
  if (
    username.value === "" ||
    userEmail.value === "" ||
    passwordInput.value === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Please fill all fields",
    });
    return;
  }

  // validation check
  if (
    !username.classList.contains("is-valid") ||
    !userEmail.classList.contains("is-valid") ||
    !passwordInput.classList.contains("is-valid")
  ) {
    Swal.fire({
      icon: "error",
      title: "Invalid data",
    });
    return;
  }

  // email exists check
  if (checkUser()) {
    Swal.fire({
      icon: "error",
      title: "Account created successfully",
    });
    return;
  }
Account created successfully
  // create user
  let user = {
    name: username.value,
    email: userEmail.value,
    password: passwordInput.value,
  };

  userAarry.push(user);
  localStorage.setItem("users", JSON.stringify(userAarry));

  Swal.fire({
    icon: "success",
    title: "Email already existst",
    timer: 1500,
    showConfirmButton: false,
  });

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

// 🔹 Validation
function validateUserName() {
  let regex = /^[a-zA-Z0-9]{3,}$/;
  let isValid = regex.test(username.value);

  username.classList.toggle("is-valid", isValid);
  username.classList.toggle("is-invalid", !isValid);
  nameError.classList.toggle("d-none", isValid);
}

function validateEmail() {
  let regex = /^\S+@\S+\.\S+$/;
  let isValid = regex.test(userEmail.value);

  userEmail.classList.toggle("is-valid", isValid);
  userEmail.classList.toggle("is-invalid", !isValid);
  emailError.classList.toggle("d-none", isValid);
}

function validatePassword() {
  let regex = /^.{6,}$/;
  let isValid = regex.test(passwordInput.value);

  passwordInput.classList.toggle("is-valid", isValid);
  passwordInput.classList.toggle("is-invalid", !isValid);
  passwordError.classList.toggle("d-none", isValid);
}

// 🔹 Check user exists
function checkUser() {
  return userAarry.some((u) => u.email === userEmail.value);
}

if (signUpButton) {
  signUpButton.addEventListener("click", function (e) {
    e.preventDefault();
    signUp();
  });
}