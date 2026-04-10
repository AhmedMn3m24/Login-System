// // let username = document.querySelector("#userNameInput");
// // let userEmail = document.querySelector("#emailInput");
// // let password = document.querySelector("#passwordInput");
// // let signUpButton = document.querySelector("#signUpBtn");
// // let nameError = document.querySelector("#userNameErr")
// // let emailError = document.querySelector("#EmailError")
// // let userpassword = document.querySelector("#passwordInput")
// // let passwordError = document.querySelector("#passwordError")
// // let userAarry = [];

// // if (localStorage.getItem("users")) {
// //     userAarry = JSON.parse(localStorage.getItem("users"))
// // }

// // signUpButton.addEventListener("click", signUp)

// // function signUp() {

// //     // check if email exists
// //     if (cheackUser()) {
// //         Swal.fire({
// //             position: "center",
// //             icon: "error",
// //             title: "Email already exists",
// //             showConfirmButton: true,
// //         })
// //         return
// //     }

// //     // create user
// //     let user = {
// //         name: username.value,
// //         email: userEmail.value,
// //         password: password.value,
// //     }

// //     // save
// //     userAarry.push(user)
// //     localStorage.setItem("users", JSON.stringify(userAarry))

// //     // success message
// //     Swal.fire({
// //         position: "center",
// //         icon: "success",
// //         title: "Account created successfully",
// //         showConfirmButton: false,
// //         timer: 1500
// //     })
// // }


// // username.addEventListener("input", function () {
// //     ValidateuserName()
// // })

// // function ValidateuserName() {
// //     let usernameRegex = /^[a-zA-Z0-9]{3,}$/
// //     let isValid = usernameRegex.test(username.value)
// //     username.classList.toggle("is-valid", isValid)
// //     username.classList.toggle("is-novalid", !isValid)
// //     nameError.classList.toggle("d-none", isValid)
// // }
// // userEmail.addEventListener("input", function () {
// //     ValidateEmail()
// // })

// // function ValidateEmail() {
// //     let userEmailRegex = /^\S+@\S+\.\S+$/
// //     let isValid = userEmailRegex.test(userEmail.value)

// //     userEmail.classList.toggle("is-valid", isValid)
// //     userEmail.classList.toggle("is-invalid", !isValid)
// //     emailError.classList.toggle("d-none", isValid)
// // }

// // userpassword.addEventListener("input", function () {
// //     validatePassword()
// // })

// // function validatePassword() {
// //     let passwordRegex = /^.{6,}$/
// //     let isValid = passwordRegex.test(userpassword.value)

// //     userpassword.classList.toggle("is-valid", isValid)
// //     userpassword.classList.toggle("is-invalid", !isValid)
// //     passwordError.classList.toggle("d-none", isValid)
// // }


// let username = document.querySelector("#userNameInput");
// let userEmail = document.querySelector("#emailInput");
// let passwordInput = document.querySelector("#passwordInput");
// let signUpButton = document.querySelector("#signUpBtn");
// let nameError = document.querySelector("#userNameErr");
// let emailError = document.querySelector("#EmailError");
// let passwordError = document.querySelector("#passwordError");

// let userAarry = JSON.parse(localStorage.getItem("users")) || [];

// signUpButton.addEventListener("click", signUp);
// username.addEventListener("input", validateUserName);
// userEmail.addEventListener("input", validateEmail);
// passwordInput.addEventListener("input", validatePassword);

// function signUp() {
//     // Check email exists
//     if (checkUser()) {
//         Swal.fire({
//             position: "center",
//             icon: "error",
//             title: "Email already exists",
//             showConfirmButton: true,
//         });
//         return;
//     }

//     // Create user
//     let user = {
//         name: username.value,
//         email: userEmail.value,
//         password: passwordInput.value,
//     };

//     // Save to localStorage
//     userAarry.push(user);
//     localStorage.setItem("users", JSON.stringify(userAarry));

//     Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Account created successfully",
//         showConfirmButton: false,
//         timer: 1500,
//     });

//     // Reset form
//     username.value = "";
//     userEmail.value = "";
//     passwordInput.value = "";
//     username.classList.remove("is-valid", "is-invalid");
//     userEmail.classList.remove("is-valid", "is-invalid");
//     passwordInput.classList.remove("is-valid", "is-invalid");
//     nameError.classList.add("d-none");
//     emailError.classList.add("d-none");
//     passwordError.classList.add("d-none");
// }

// // ✅ Validation functions
// function validateUserName() {
//     let usernameRegex = /^[a-zA-Z0-9]{3,}$/;
//     let isValid = usernameRegex.test(username.value);
//     username.classList.toggle("is-valid", isValid);
//     username.classList.toggle("is-invalid", !isValid);
//     nameError.classList.toggle("d-none", isValid);
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

// // ✅ Check if email exists
// function checkUser() {
//     return userAarry.some(u => u.email === userEmail.value);
// }   



// let signInLink = document.querySelector(".account a");

// signInLink.addEventListener("click", function (e) {
//   if (userEmail.value === "" || passwordInput.value === "") {
//     e.preventDefault();
//     alert("اكتب البيانات الأول");
//   } else {
//     // سيبه يروح عادي
//     // أو ممكن تعمل redirect بنفسك:
//     // window.location.href = "index.html";
//   }
// });




// signUpButton.addEventListener("click", function (e) {
//   e.preventDefault(); // يمنع الـ submit

//   validateEmail();
//   validatePassword();

//   // ❌ لو فاضي
//   if (userEmail.value === "" || passwordInput.value === "") {
//     alert("اكتب البيانات الأول");
//     return;
//   }

//   // ❌ لو فيه validation error
//   if (
//     !userEmail.classList.contains("is-valid") ||
//     !passwordInput.classList.contains("is-valid")
//   ) {
//     alert("فيه Error في البيانات");
//     return;
//   }

//   // ✅ لو كله تمام
//   userAarry.push({
//     email: userEmail.value,
//     password: passwordInput.value,
//   });

//   localStorage.setItem("users", JSON.stringify(userAarry));

//   // 🔥 يروح صفحة اللوجن
//   window.location.href = "index.html";
// });



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
      title: "Email already exists",
    });
    return;
  }

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
    title: "Account created successfully",
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
