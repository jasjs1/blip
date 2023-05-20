function saveSignupInfo() {
    var form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var username = document.getElementById('username').value;
      var mainInterests = document.getElementById('main-interests').value;
      var profileImageInput = document.getElementById('profile-image');
      var profileImage = '';
  
      if (profileImageInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(event) {
          profileImage = event.target.result;
          saveDataToLocalStorage(name, username, mainInterests, profileImage);
        };
        reader.readAsDataURL(profileImageInput.files[0]);
      } else {
        saveDataToLocalStorage(name, username, mainInterests, profileImage);
      }
    });
  
    function saveDataToLocalStorage(name, username, mainInterests, profileImage) {
      localStorage.setItem('name', name);
      localStorage.setItem('username', username);
      localStorage.setItem('mainInterests', mainInterests);
      localStorage.setItem('profileImage', profileImage);
      window.location.href = 'http://127.0.0.1:5500/.app/app.html';
    }
  }
  
