const express = require('express');
// Make express Lib run
const app = express();

const cors = require('cors');

// **MIDDLEWARE
app.use(cors());
// Gives us access to req.body converted to json
app.use(express.json());

// Start server on PORT 5000
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
