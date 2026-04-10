
// // let userEmail = document.querySelector("#emailInput");
// // let passwordInput = document.querySelector("#passwordInput");
// // let emailError = document.querySelector("#EmailError");
// // let passwordError = document.querySelector("#passwordError");
// // let loginButton = document.querySelector("#loginbtn");

// // let userAarry = JSON.parse(localStorage.getItem("users")) || [];

// // // 🔹 Login Button
// // loginButton.addEventListener("click", function (e) {
// //   e.preventDefault();

// //   validateEmail();
// //   validatePassword();

// //   if (
// //     !userEmail.classList.contains("is-valid") ||
// //     !passwordInput.classList.contains("is-valid")
// //   ) {
// //     Swal.fire({
// //       icon: "error",
// //       title: "Invalid input",
// //       text: "Please enter valid data",
// //     });
// //     return;
// //   }

// //   if (loginCheck()) {
// //     // ✅ save current user
// //     localStorage.setItem("currentUser", userEmail.value);

// //     Swal.fire({
// //       icon: "success",
// //       title: "Login Success",
// //       timer: 1500,
// //       showConfirmButton: false,
// //     });

// //     // 🔥 redirect
// //     setTimeout(() => {
// //       window.location.href = "home.html";
// //     }, 1500);
// //   } else {
// //     Swal.fire({
// //       icon: "error",
// //       title: "Invalid email or password",
// //     });
// //   }
// // });

// // // 🔹 Check user
// // function loginCheck() {
// //   for (let i = 0; i < userAarry.length; i++) {
// //     if (
// //       userAarry[i].email === userEmail.value &&
// //       userAarry[i].password === passwordInput.value
// //     ) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }

// // // 🔹 Email Validation
// // function validateEmail() {
// //   let regex = /^\S+@\S+\.\S+$/;
// //   let isValid = regex.test(userEmail.value);

// //   userEmail.classList.toggle("is-valid", isValid);
// //   userEmail.classList.toggle("is-invalid", !isValid);
// //   emailError.classList.toggle("d-none", isValid);
// // }

// // // 🔹 Password Validation
// // function validatePassword() {
// //   let regex = /^.{6,}$/;
// //   let isValid = regex.test(passwordInput.value);

// //   passwordInput.classList.toggle("is-valid", isValid);
// //   passwordInput.classList.toggle("is-invalid", !isValid);
// //   passwordError.classList.toggle("d-none", isValid);
// // }

// // // 🔹 Live validation
// // userEmail.addEventListener("input", validateEmail);
// // passwordInput.addEventListener("input", validatePassword);



// let userEmail = document.querySelector("#emailInput");
// let passwordInput = document.querySelector("#passwordInput");
// let emailError = document.querySelector("#EmailError");
// let passwordError = document.querySelector("#passwordError");
// let loginButton = document.querySelector("#loginbtn");

// let userAarry = JSON.parse(localStorage.getItem("users")) || [];

// // 🔹 Guard
// if (!loginButton) throw new Error("Login button not found");

// // 🔹 Login Event
// loginButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   login();
// });

// // 🔹 Login Function
// function login() {
//   validateEmail();
//   validatePassword();

//   if (
//     userEmail.value === "" ||
//     passwordInput.value === ""
//   ) {
//     Swal.fire({ icon: "error", title: "Fill all fields" });
//     return;
//   }

//   if (
//     !userEmail.classList.contains("is-valid") ||
//     !passwordInput.classList.contains("is-valid")
//   ) {
//     Swal.fire({ icon: "error", title: "Invalid data" });
//     return;
//   }

//   if (loginCheck()) {
//     localStorage.setItem("currentUser", userEmail.value);

//     Swal.fire({
//       icon: "success",
//       title: "Login Success",
//       timer: 1500,
//       showConfirmButton: false,
//     });

//     setTimeout(() => {
//       window.location.href = "home.html";
//     }, 1500);
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Invalid email or password",
//     });
//   }
// }

// // 🔹 Check login
// function loginCheck() {
//   return userAarry.some(
//     (u) =>
//       u.email === userEmail.value &&
//       u.password === passwordInput.value
//   );
// }

// // 🔹 Validation
// function validateEmail() {
//   let regex = /^\S+@\S+\.\S+$/;
//   let isValid = regex.test(userEmail.value);

//   userEmail.classList.toggle("is-valid", isValid);
//   userEmail.classList.toggle("is-invalid", !isValid);
//   emailError.classList.toggle("d-none", isValid);
// }

// function validatePassword() {
//   let regex = /^.{6,}$/;
//   let isValid = regex.test(passwordInput.value);

//   passwordInput.classList.toggle("is-valid", isValid);
//   passwordInput.classList.toggle("is-invalid", !isValid);
//   passwordError.classList.toggle("d-none", isValid);
// }

// // 🔹 Live validation
// userEmail.addEventListener("input", validateEmail);
// passwordInput.addEventListener("input", validatePassword);




let email = document.querySelector("#emailInput");
let password = document.querySelector("#passwordInput");
let loginBtn = document.querySelector("#loginbtn");

let users = JSON.parse(localStorage.getItem("users")) || [];

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (email.value === "" || password.value === "") {
        alert("املأ البيانات");
        return;
    }

    let found = users.find(
        (u) => u.email === email.value && u.password === password.value
    );

    if (found) {
        localStorage.setItem("currentUser", email.value);
        alert("تم الدخول");
        window.location.href = "home.html";
    } else {
        alert("بيانات غلط");
    }
});