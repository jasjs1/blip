
  // Retrieve the form and submit button elements
  const form = document.querySelector('form');
  const submitButton = document.getElementById('submit');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve the input values
    const articleTitle = document.getElementById('article-title').value;
    const articleSummary = document.getElementById('article-summary').value;
    const articleTag = document.getElementById('article-tag').value;
    const articleContent = document.getElementById('article-content').value;

    // Create an object to store the article data
    const article = {
      title: articleTitle,
      summary: articleSummary,
      tag: articleTag,
      content: articleContent
    };

    // Convert the object to JSON string
    const articleJSON = JSON.stringify(article);

    // Save the JSON string to localStorage
    localStorage.setItem('article', articleJSON);

    // Display a success message
    alert('Article saved successfully!');
  });

  // Retrieve the saved article from localStorage if it exists
  const savedArticleJSON = localStorage.getItem('article');
  if (savedArticleJSON) {
    const savedArticle = JSON.parse(savedArticleJSON);

    // Populate the form fields with the saved article data
    document.getElementById('article-title').value = savedArticle.title;
    document.getElementById('article-summary').value = savedArticle.summary;
    document.getElementById('article-tag').value = savedArticle.tag;
    document.getElementById('article-content').value = savedArticle.content;
  }