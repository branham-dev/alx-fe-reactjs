import { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
	const [newTodo, setNewTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTodo.trim() === "") return;
		onAddTodo(newTodo);
		setNewTodo("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder='Add a new todo'
			/>
			<button type='submit'>Add</button>
		</form>
	);
}
