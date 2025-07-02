var userName = document.getElementById('username')
var userEmail = document.getElementById('Email')
var userpassword = document.getElementById('password')
var registerbtn = document.getElementById('registerbtn')
var succeesMsg = document.getElementById('succeesMsg')
var errorMsg = document.getElementById('errorMsg')
var users = [];

if (localStorage.getItem("data") != null) {
    users = JSON.parse(localStorage.getItem("data"));
}

var validInput = function (input) {
    console.log(input);

    var regex = {
        username: /^[A-Z][a-z]{2,9}$/,
        Email: /^[a-z0-9-]{2,20}@(gmail)\.(com)$/,
        password: /^[A-Z][a-z0-9]{3,20}[!@#$?]$/
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
    for (var i = 0; i < users.length; i++) {
        if (users[i].Email === userEmail.value) {
            errorMsg.classList.replace("d-none", "d-block")
            return;
        } else {
            console.log('Error');

        }

    }
    var signUsers = {
        name: userName.value,
        Email: userEmail.value,
        password: userpassword.value
    }
    users.push(signUsers)
    localStorage.setItem("data", JSON.stringify(users))
    succeesMsg.classList.replace("d-none", "d-block")
    setTimeout(function () {
        window.location.href = 'pages/login.html'
    }, 1000)

    console.log(users);
});


registerbtn.addEventListener('click', function () {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })
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