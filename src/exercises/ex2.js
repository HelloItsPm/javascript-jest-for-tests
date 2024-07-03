const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  // Your code here: Change the text content of the 'message' paragraph.
  message.textContent = 'Saperlipopette, ça vient de changer! WOUAAAAAH!';
}
console.log("test");
clickMeButton.addEventListener('click', showMessage);