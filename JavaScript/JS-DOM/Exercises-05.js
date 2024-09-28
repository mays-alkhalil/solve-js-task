// When the user clicks the ‘Register’ button, a message should be displayed informing them of
// a successful user registration.


(function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const registerBtn = document.getElementById('registerBtn');
    const registrationMessage = document.createElement('div'); // إنشاء عنصر لعرض الرسالة

    // إضافة عنصر الرسالة إلى الصفحة
    document.body.appendChild(registrationMessage);
    registrationMessage.style.color = 'green'; // تعيين لون الرسالة

  

    // مستمع حدث للنقر على زر التسجيل
    registerBtn.addEventListener('click', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج
        registrationMessage.textContent = "The active user has been registered!"; // عرض رسالة النجاح
    });
})();
