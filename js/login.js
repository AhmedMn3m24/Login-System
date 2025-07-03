var userEmail = document.getElementById('Email')
var userpassword = document.getElementById('password')
var succeesMsg = document.getElementById('succeesMsg')
var errorMsg = document.getElementById('errorMsg')
var loginbtn = document.getElementById('loginbtn')


var userslogin = []


if (localStorage.getItem("data") !== null) {
    userslogin = JSON.parse(localStorage.getItem("data"))
    console.log(userslogin);
}

loginbtn.addEventListener('click', function () {
    console.log('test');
    errorMsg.classList.replace('block', 'd-none')
    for (var i = 0; i < userslogin.length; i++) {
        if (userslogin[i].Email === userEmail.value && userslogin[i].password === userpassword.value) {
            succeesMsg.classList.replace('d-none', 'd-block');
            localStorage.setItem("userName", userslogin[i].name)
            setTimeout(function () {
                window.location.href = '../pages/home.html'
            }, 1000)
            console.log('done');

            return;
        }

    }
    errorMsg.classList.replace('d-none', 'd-block')
})