const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000; // Adjust the port number if needed

// Serve static files from the current directory
app.use(express.static(__dirname));

// Endpoint to handle saving the article data
app.post('/save-article', (req, res) => {
  const articleData = req.body; // Assuming the request contains the article data as JSON

  // Convert the article data to JSON string
  const articleJSON = JSON.stringify(articleData);

  // File path for saving the article
  const filePath = __dirname + '/article.json';

  // Save the article JSON to the file
  fs.writeFile(filePath, articleJSON, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving the article.');
    } else {
      res.send('Article saved successfully!');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
