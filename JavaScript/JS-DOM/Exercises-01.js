// Add a label to each of the input fields: username, password, confirm password 


const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const registerBtn = document.getElementById('registerBtn');
const form = document.getElementById('registrationForm');



// في الكود أعلاه، نقوم بإنشاء كل تصنيف (label) باستخدام document.createElement().
// بعد ذلك، نقوم بتعيين خاصية for للربط بحقل الإدخال المناسب باستخدام setAttribute.
// نستخدم insertBefore() لإدراج التصنيف قبل حقل الإدخال المناسب.


function addLabels() {
  const usernameLabel = document.createElement('label');
  usernameLabel.setAttribute('for', 'username');
  usernameLabel.textContent = 'Username: ';
  form.insertBefore(usernameLabel, username); 
  
  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'password');
  passwordLabel.textContent = 'Password: ';
  form.insertBefore(passwordLabel, password);
  
  const confirmPasswordLabel = document.createElement('label');
  confirmPasswordLabel.setAttribute('for', 'confirmPassword');
  confirmPasswordLabel.textContent = 'Confirm Password: ';
  form.insertBefore(confirmPasswordLabel, confirmPassword);
}

addLabels();
