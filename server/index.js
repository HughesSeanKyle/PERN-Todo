const express = require('express');
const app = express();
const cors = require('cors');
const pool = required('./db');

// **MIDDLEWARE
app.use(cors());
// Gives us access to req.body converted to json
app.use(express.json());

// **ROUTES
// Create a todo (POST)
// get all todos (GET)
// get a todo (GET)
// update a todo (PUT)
// delete a todo (DELETE)

// Start server on PORT 5000
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
