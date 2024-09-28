// Add a further validation to check if the user input in the password and confirm password
// inputs match. Show an error message if they do not. 



(function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    function checkPasswordMatch() {
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Password and confirm password do not match";
        } else {
            confirmPasswordError.textContent = "";
        }
    }

    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);
})();
