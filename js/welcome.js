let welcomeMessage = document.querySelector("#welcomemessge");
let logoutBtn = document.querySelector("#LogOUtBTN");

let currentUserEmail = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users")) || [];

// 🔴 حماية الصفحة
if (!currentUserEmail) {
  window.location.href = "index.html";
}

// 🔹 جلب المستخدم
let currentUser = users.find(u => u.email === currentUserEmail);

// 🔹 رسالة الترحيب
welcomeMessage.innerHTML = currentUser
  ? `Welcome, ${currentUser.name} 👋`
  : "Welcome 👋";

// 🔹 Logout
logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});