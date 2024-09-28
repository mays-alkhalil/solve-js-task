document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    // الحصول على قيم الإدخال
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
  
    // علم التحقق
    let isValid = true;
  
    // التحقق من اسم المستخدم
    if (!username) {
      document.getElementById('usernameError').textContent = 'Required';
      
      isValid = false;
    }
  
    // التحقق من كلمة المرور
    if (!password) {
      document.getElementById('passwordError').textContent = 'Required';
      isValid = false;
    }
  
    // التحقق من تأكيد كلمة المرور
    if (!confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Required';
      isValid = false;
    }
  
    // التحقق إذا كان التحقق ناجحًا
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
  