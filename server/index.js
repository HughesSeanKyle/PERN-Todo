const express = require('express');
// Make express Lib run
const app = express();

const cors = require('cors');

// middleware
app.use(cors());

// Start server on PORT 5000
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
