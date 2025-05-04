const form = document.getElementById('contactme');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formMessage = document.getElementById('formmessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous message
  formMessage.textContent = '';
  formMessage.style.color = 'red';

  // Basic validation
  if (name.value.trim() === '') {
    formMessage.textContent = 'Please enter your name.';
    return;
  }

  if (email.value.trim() === '' || !validateEmail(email.value)) {
    formMessage.textContent = 'Please enter a valid email.';
    return;
  }

  if (message.value.trim() === '') {
    formMessage.textContent = 'Please enter your message.';
    return;
  }

  // If all is valid
  formMessage.style.color = 'green';
  formMessage.textContent = 'Message sent successfully!';
  form.reset();
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

