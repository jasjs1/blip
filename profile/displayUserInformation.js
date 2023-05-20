// Load user name and tag from local storage
const savedName = localStorage.getItem('name') || '';
const savedUserName = localStorage.getItem('username') || '';
const savedTag = localStorage.getItem('mainInterests') || '';

// Update the user name and tag elements with the saved values
const nameElement = document.getElementById('signup-name');
nameElement.textContent = savedName;

const userNameElement = document.getElementById('user-username');
const tagElement = document.getElementById('tag');

userNameElement.textContent = `@${savedUserName}`;
tagElement.textContent = `@${savedUserName}.blip`;

if (savedUserName) {
  userNameElement.textContent = `@${savedUserName} `;
} else {
  // userNameElement.textContent = 'No username found in local storage';
}
