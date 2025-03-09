import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders Todo List component", () => {
	render(<TodoList />);
	expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a new todo", () => {
	render(<TodoList />);
	const input = screen.getByRole("textbox");
	const addButton = screen.getByText("Add");

	fireEvent.change(input, { target: { value: "New Task" } });
	fireEvent.click(addButton);

	expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
	render(<TodoList />);
	const input = screen.getByRole("textbox");
	const addButton = screen.getByText("Add");

	fireEvent.change(input, { target: { value: "Learn React" } });
	fireEvent.click(addButton);

	const task = screen.getByText("Learn React");

	fireEvent.click(task);
	expect(task).toHaveStyle("text-decoration: line-through");

	fireEvent.click(task);
	expect(task).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
	render(<TodoList />);
	const input = screen.getByRole("textbox");
	const addButton = screen.getByText("Add");

	fireEvent.change(input, { target: { value: "Learn React" } });
	fireEvent.click(addButton);

	const deleteButton = screen.getAllByText("X")[0];

	fireEvent.click(deleteButton);
	expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
