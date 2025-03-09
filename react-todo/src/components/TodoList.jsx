import { useState } from "react";

const initialTodos = [
	{ id: 1, text: "Learn React", completed: false },
	{ id: 2, text: "Write tests", completed: false },
];

export default function TodoList() {
	const [todos, setTodos] = useState(initialTodos);

	const addTodo = (text) => {
		setTodos([...todos, { id: Date.now(), text, completed: false }]);
	};

	const toggleTodo = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<h2>Todo List</h2>
			<AddTodoForm addTodo={addTodo} />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<span
							onClick={() => toggleTodo(todo.id)}
							style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
							{todo.text}
						</span>
						<button onClick={() => deleteTodo(todo.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function AddTodoForm({ addTodo }) {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text.trim()) return;
		addTodo(text);
		setText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={text} onChange={(e) => setText(e.target.value)} />
			<button type='submit'>Add</button>
		</form>
	);
}
