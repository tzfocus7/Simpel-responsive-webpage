const togglePassword1 = document.getElementById('togglePassword1');
const password1 = document.getElementById('password1');

togglePassword1.addEventListener('click', function(e) {
   const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
   password1.setAttribute('type', type);
   this.classList.toggle('fa-eye-slash');
})