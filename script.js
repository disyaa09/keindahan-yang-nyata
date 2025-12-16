function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Login gagal!";
    }
}

function checkLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}
