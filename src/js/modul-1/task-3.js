const ADMIN_PASSWORD = prompt('Enter your password');
let message;

if (ADMIN_PASSWORD === null) {
  message = 'User cancelled!';
  console.log(message);
} else if (ADMIN_PASSWORD === 'jqueryismyjam') {
  message = 'Welcome!';
  console.log(message);
} else {
  message = 'Access denied, incorrect password!';
  console.log(message);1
}

alert(message);
