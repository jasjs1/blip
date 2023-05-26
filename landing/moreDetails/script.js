function saveSignupInfo() {
  // Get the input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var profileType = document.getElementById('profile-type-sel').value;

  // Save the input values to localStorage
  localStorage.setItem('savedEmail', email);
  localStorage.setItem('savedPassword', password);
  localStorage.setItem('savedProfileType', profileType);

  // Display the profile type value
  var profileTypeText = document.getElementById('profile-type-display');
  profileTypeText.textContent = "Profile Type: " + profileType;

  // Redirect to the desired location after saving to localStorage
  window.location.href = "http://127.0.0.1:5500/app/app.html";
}
