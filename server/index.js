// Import Express
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port
const PORT = 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
