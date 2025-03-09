import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

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
			<h1>Todo List</h1>
			<AddTodoForm onAddTodo={addTodo} />
			<ul>
				{todos.map((todo) => (
					<li key={todo.id} onClick={() => toggleTodo(todo.id)}>
						<span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
						<button
							onClick={(e) => {
								e.stopPropagation();
								deleteTodo(todo.id);
							}}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
