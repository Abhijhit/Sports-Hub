document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("registerMessage");

    if (fullname === "" || username === "" || email === "") {

        message.style.color = "#ff5252";
        message.innerText = "Please fill all required fields.";
        return;

    }

    if (!/^[0-9]{10}$/.test(mobile)) {

        message.style.color = "#ff5252";
        message.innerText = "Enter a valid 10-digit mobile number.";
        return;

    }

    if (password.length < 8) {

        message.style.color = "#ff5252";
        message.innerText = "Password must contain at least 8 characters.";
        return;

    }

    if (password !== confirmPassword) {

        message.style.color = "#ff5252";
        message.innerText = "Passwords do not match!";
        return;

    }

    message.style.color = "#00c6a7";
    message.innerText = "Form validated successfully!";

});