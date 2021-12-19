const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// **MIDDLEWARE
app.use(cors());
// Gives us access to req.body converted to json
app.use(express.json());

// **ROUTES
// Create a todo (POST)
app.post('/todos', async (req, res) => {
	try {
		// Get description from req.body
		const { description } = req.body;
		const newTodo = await pool.query(
			'INSERT INTO todo (description) VALUES($1) RETURNING * ',
			[description]
		);

		// convert request to JSON
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// get all todos (GET)
app.get('/todos', async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM todo');
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// get a todo (GET)
app.get('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
			id,
		]);

		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// update a todo (PUT)
app.put('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			'UPDATE todo SET description = $1 WHERE todo_id = $2',
			[description, id]
		);

		res.json('Todo was updated!');
	} catch (err) {
		console.log(err.message);
	}
});

// delete a todo (DELETE)
app.delete('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
			id,
		]);

		res.json('Todo was deleted!');
	} catch (err) {
		console.log(err.message);
	}
});

// Start server on PORT 5000
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
