// auth.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Placeholder: Handle login logic here
    alert(`Logged in with email: ${email}`);
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Placeholder: Handle registration logic here
    alert(`Registered with username: ${username}, email: ${email}`);
});
