import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);

	// **Helper Functions
	// edit description function

	const updateDescription = async (e) => {
		e.preventDefault();

		try {
			// Destructured from todo.description
			const body = { description };
			const response = await fetch(
				`http://localhost:5000/todos/${todo.todo_id}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				}
			);

			// console.log(response);
			// Refresh onUpdateDescription
			window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			{/* <!-- Button to Open the Modal --> */}
			<button
				type="button"
				className="btn btn-warning"
				data-toggle="modal"
				// Target the id given below
				data-target={`#id${todo.todo_id}`}
			>
				Edit
			</button>

			{/* <!-- The Modal --> */}
			<div
				className="modal"
				id={`id${todo.todo_id}`}
				// This one bubbles up (parent will get it too)
				onClick={() => setDescription(todo.description)}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						{/* <!-- Modal Header --> */}
						<div className="modal-header">
							<h4 className="modal-title">Edit Todo</h4>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								onClick={() => setDescription(todo.description)}
							>
								&times;
							</button>
						</div>

						{/* <!-- Modal body --> */}
						<div className="modal-body">
							<input
								value={description}
								type="text"
								className="form-control"
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						{/* Modal footer  */}
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								onClick={(e) => updateDescription(e)}
							>
								Save
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
								onClick={() => setDescription(todo.description)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditTodo;
