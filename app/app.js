const publishBtn = document.getElementById('publish-btn');
const postMakerInput = document.getElementById('post-maker');

publishBtn.addEventListener('click', function() {
  const postContent = postMakerInput.value;
  savePost(postContent);
});

function savePost(content) {
  const post = {
    content: content
  };

  // Convert the post object to JSON string
  const jsonPost = JSON.stringify(post);

  // You can implement your own logic here to save the JSON data
  // For example, you can store it in a database or send it to a server
  console.log('Post saved as JSON:', jsonPost);
  // Add your logic to handle the saved JSON data as needed
}
