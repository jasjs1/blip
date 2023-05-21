// Link

function createLink() {
    var link;
    do {
      link = prompt("Enter the URL for the link (format: https://example.com/):", "https://example.com/");
      if (link != null) {
        if (link.startsWith("https://") && link.endsWith("/")) {
          var postTitleInput = document.getElementById("post-maker");
          var existingValue = postTitleInput.value;
          var newLink = "<a href='" + link + "' target='_blank'>" + link + "</a>";
          postTitleInput.value = existingValue + newLink;
  
          // add event listener to newly created link
          var links = postTitleInput.getElementsByTagName("a");
          var newLinkElement = links[links.length - 1]; // get last link element
          newLinkElement.addEventListener("click", function(event) {
            event.preventDefault(); // prevent default link behavior
            window.open(newLinkElement.href, '_blank'); // open link in new tab
          });
        } else {
          alert("ERR: Invalid URL format. Please enter a URL with the correct formatting: https://example.com/");
          console.error('ERR: invalid URL format. The user must enter a new URL in the format of: https://example.com/');
        }
  
        var linkForm = document.getElementById("link-form");
        if (linkForm.style.display === "none") {
          linkForm.style.display = "block";
        } else {
          linkForm.style.display = "none";
        }
      }
    } while (link != null && (!link.startsWith("https://") || !link.endsWith("/")));
  }
  
  