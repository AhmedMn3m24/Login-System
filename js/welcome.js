let welcomeMessage = document.querySelector("#welcomemessge");
let logoutBtn = document.querySelector("#LogOUtBTN");

// 🔹 get current user
let currentUserEmail = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users")) || [];

// 🔴 حماية الصفحة (لو مش عامل login)
if (!currentUserEmail) {
  window.location.href = "index.html";
}

// 🔹 جلب اسم المستخدم
let currentUser = users.find(
  (user) => user.email === currentUserEmail
);

if (currentUser) {
  welcomeMessage.innerHTML = `Welcome, ${currentUser.name} 👋`;
} else {
  welcomeMessage.innerHTML = "Welcome 👋";
}

// 🔹 Logout
logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  localStorage.removeItem("currentUser");

  window.location.href = "index.html";
});