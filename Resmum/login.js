const form = document.querySelector('form');
const usernameDisplay = document.querySelector('#username-display');
const logoutButton = document.querySelector('#logout-button');

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // TODO: perform authentication
  if (authenticated) {
    usernameDisplay.textContent = username;
    form.style.display = 'none';
    usernameDisplay.style.display = 'block';
    logoutButton.style.display = 'block';
  } else {
    alert('Invalid username or password');
  }
});

logoutButton.addEventListener('click', () => {
  // TODO: clear user information, display login form, hide logout button
  usernameDisplay.style.display = 'none';
  form.style.display = 'block';
  logoutButton.style.display = 'none';
});
