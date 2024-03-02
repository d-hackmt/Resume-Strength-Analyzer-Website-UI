const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // perform validation and create account
  if (valid) {
    // redirect to login page
    window.location.href = "login.html";
  } else {
    alert("Please fill in all required fields and make sure your passwords match.");
  }
});
