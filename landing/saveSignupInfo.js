function saveSignupInfo() {
  // Retrieve email and password from localStorage if available
  document.getElementById('email').value = localStorage.getItem('savedEmail') || '';
  document.getElementById('password').value = localStorage.getItem('savedPassword') || '';

  // Event listener for submit button
  document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Save the input values to localStorage
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);

    // Perform any further actions here (e.g., form submission)
    // ...
  });
  window.location.href = "http://127.0.0.1:5500/app/app.html";
}

