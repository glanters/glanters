document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Lakukan proses autentikasi di sini
        
        if (username === "user" && password === "pass") {
            // Jika login berhasil, arahkan ke halaman dashboard.html di folder "pages"
            window.location.href = "pages/dashboard.html";
        } else {
            // Jika login gagal, berikan pesan atau tindakan lainnya
            alert("Login failed. Please try again.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-password").value;
        const email = document.getElementById("reg-email").value;
        const phone = document.getElementById("reg-phone").value;

        // Simulate storing the registration data in an array
        const registrationData = {
            "username": username,
            "password": password,
            "email": email,
            "phone": phone
        };

        // Push the data into an array (you can replace this with server-side logic)
        const registeredUsers = [];
        registeredUsers.push(registrationData);

        alert("Registration successful!");

        // Reset the form
        registrationForm.reset();
    });
});


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
