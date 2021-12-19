import React, { Fragment, useEffect, useState } from 'react';

const ListTodo = () => {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const response = await fetch('http://localhost:5000/todos');
			// Takes time to parse data => await
			const jsonData = await response.json();

			setTodos(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	// Will run Each time comp updated and first time comp is rendered (Without [])
	// with [] => Will run only when state is changed and when comp first renders
	// [] refers to any piece of state in this comp
	// [item1] = > Only the item1 state
	useEffect(() => {
		getTodos();
	}, []);

	console.log(todos);

	// const renderTodos = () => {
	// 	todos.map((todo) => (
	// 		<tr>
	// 			<td>{todo.description}</td>
	// 			<td>Edit</td>
	// 			<td>Delete</td>
	// 		</tr>
	// 	));
	// };

	return (
		<Fragment>
			<div className="container">
				<table className="table mt-5">
					<thead>
						<tr>
							<th>Description</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.todo_id}>
								<td>{todo.description}</td>
								<td>Edit</td>
								<td>Delete</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default ListTodo;
