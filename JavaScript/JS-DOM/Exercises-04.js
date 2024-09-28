// Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input
// fields. Once they have, the registration button should then be enabled. 



(function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerBtn = document.getElementById('registerBtn');

    function validateAllFields() {
        // التحقق من أن جميع الحقول ليست فارغة
        const isFormValid = 
            usernameInput.value.trim() !== "" && 
            passwordInput.value.trim() !== "" && 
            confirmPasswordInput.value.trim() !== "" && 
            passwordInput.value === confirmPasswordInput.value; 

        // تفعيل أو تعطيل زر التسجيل بناءً على حالة التحقق
        registerBtn.disabled = !isFormValid;
    }

    usernameInput.addEventListener('input', validateAllFields);
    passwordInput.addEventListener('input', validateAllFields);
    confirmPasswordInput.addEventListener('input', validateAllFields);
})();
