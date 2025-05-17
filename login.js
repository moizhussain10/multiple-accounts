function login(event) {
    event.preventDefault(); // Stop form reload

    let loginEmail = document.querySelector('#loginEmail').value.trim();
    let loginPassword = document.querySelector('#loginPassword').value;

    let savedUsers = localStorage.getItem('user-data');

    if (savedUsers) {
        savedUsers = JSON.parse(savedUsers);  // string → array
    } else {
        savedUsers = [];
    }

    // ✅ Check if user exists
    let userFound = false;

    for (let i = 0; i < savedUsers.length; i++) {
        if (
            savedUsers[i].Email === loginEmail &&
            savedUsers[i].Password === loginPassword
        ) {
            userFound = true;
            break;
        }
    }



    if (userFound) {
        alert("Login successful!");
        // ✅ Redirect to dashboard/home page
        window.location.href = "dashboard.html";
    } else {
        alert("User not found. Please sign up.");
        // ❌ Redirect to signup page
        window.location.href = "signup.html";
    }
}
