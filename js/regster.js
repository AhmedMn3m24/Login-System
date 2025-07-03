var userName = document.getElementById('username')
var userEmail = document.getElementById('Email')
var userpassword = document.getElementById('password')
var registerbtn = document.getElementById('registerbtn')
var succeesMsg = document.getElementById('succeesMsg')
var errorMsg = document.getElementById('errorMsg')
var form = document.querySelector('form')


var users = [];

if (localStorage.getItem("data") != null) {
    users = JSON.parse(localStorage.getItem("data"));
}

var validInput = function (input) {
    console.log(input);

    const regex = {
        username: /^[A-Z][a-z]{2,6}$/,
        Email: /^[a-z0-9-]{2,20}@(gmail)\.(com)$/,
        password: /^[a-zA-Z0-9]{4,20}$/

    };

    if (regex[input.id] && regex[input.id].test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
};


registerbtn.addEventListener('click', function () {
    errorMsg.classList.replace('d-none', 'd-block')
    const matchedUser = users.find(function (user) {
        return user.Email === userEmail.value;
    });
    if (matchedUser) {
        errorMsg.classList.replace("d-none", "d-block")
        return;
    }


    console.log("functionDD");

    var signUsers = {
        userName: userName.value,
        userEmail: userEmail.value,
        userpassword: userpassword.value
    }
    users.push(signUsers)
    localStorage.setItem("data", JSON.stringify(users))
    succeesMsg.classList.replace("d-none", "d-block")
    setTimeout(function () {
        window.location.href = '../pages/login.html'
    }, 1000)

    console.log(users);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();


})
userName.addEventListener('input', () => {
    validInput(userName);
})
userEmail.addEventListener('input', () => {
    validInput(userEmail);
})
userpassword.addEventListener('input', () => {
    validInput(userpassword);
})