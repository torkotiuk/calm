const clearLogBtn = document.querySelector('button[data-action="clear"]');
const logList = document.querySelector('.log-list');

window.addEventListener('keydown', logMessage);
window.addEventListener('keyup', logMessage);

clearLogBtn.addEventListener('click', e => {
  logList.innerHTML = '';
});

function logMessage({ type, key, code }) {
  const message = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = `${type} event`;

  const text = document.createElement('p');
  text.textContent = `key value is "${key}" | code value is "${code}"`;

  message.append(title, text);
  logList.appendChild(message);
}
