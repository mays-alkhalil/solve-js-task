// Add a required validation to each input that shows an error message next to the entry if it
// does not have any text entered. 


const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function validateRequiredFields() {
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = " required";
    } else {
        usernameError.textContent = "";
    }
    
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "required ";
    } else {
        passwordError.textContent = "";
    }
}

usernameInput.addEventListener('input', validateRequiredFields);
passwordInput.addEventListener('input', validateRequiredFields);
