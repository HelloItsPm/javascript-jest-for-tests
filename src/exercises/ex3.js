const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail() {
  // Your code here: Implement email validation and display a message accordingly.
  const email = emailInput.value.trim();

  // Vérifier si l'email est vide
  if (email === '') {
    validationMessage.textContent = 'Please enter an email.';
    validationMessage.style.color = 'red';
    return false;
  }

   // Utiliser une expression régulière pour vérifier le format de l'email
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ex: /(^début)patatati+@patatata+.com($fin)/
   if (!regex.test(email)) {
     validationMessage.textContent = 'Please enter a valid email.';
     validationMessage.style.color = 'red';
     return false;
   }

    // Si l'email est valide
  validationMessage.textContent = 'Email is valid!';
  validationMessage.style.color = 'green';
  return true;
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});