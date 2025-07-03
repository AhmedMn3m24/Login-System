var welcomeMsg = document.getElementById('welcomeMsg');
var logout = document.getElementById('logout')
var userName = localStorage.getItem("userName");
if (userName !== null && userName.trim() !== "") {
    welcomeMsg.innerHTML = `Welcome ${userName}`;
    console.log(userName);
} else {
    welcomeMsg.innerHTML = `NOT Found`;
    setTimeout(function () {
        window.location.href = '/pages/login.html'
    }, 1000)
    console.log("NOT Found");
}
logout.addEventListener('click', function () {
    localStorage.removeItem("userName")
    setTimeout(function () {
        window.location.href = '/pages/login.html'
    }, 1000)
})