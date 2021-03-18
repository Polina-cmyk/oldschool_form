let form = document.querySelector('#form');
let userName = document.querySelector('#name');
let password = document.querySelector('#password');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
console.log(password.value);

form.addEventListener('submit', (e) => {
  let warningMessages = [];
  if (password.value.length < 6) {
    warningMessages.push('Password must be more than 6 characters');
  } else if (password.value === 'password') {
    warningMessages.push(`Password can't be 'password'`);
  } else if (password.value.length > 20) {
    warningMessages.push('Password must not be more than 20 characters');
  }

  if (userName.value === '' || userName.value === null) {
    warningMessages.push('Enter your name please');
  }

  if (warningMessages.length > 0) {
    e.preventDefault();
    message.innerHTML = warningMessages.join(', ');
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.705)';
  }
});
