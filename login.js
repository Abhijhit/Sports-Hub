// Show / Hide Password

document.getElementById("showPassword").addEventListener("change", function() {

    let password = document.getElementById("password");

    password.type = this.checked ? "text" : "password";

});


// Login Form

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {

        document.getElementById("message").innerText =
            "Please enter username and password.";

        return;

    }

    document.getElementById("message").innerText =
        "Connecting to server...";

});