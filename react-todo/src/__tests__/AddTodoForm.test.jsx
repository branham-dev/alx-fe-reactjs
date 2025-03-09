import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../components/AddTodoForm";

test("calls onAddTodo when a new todo is submitted", () => {
	const mockOnAddTodo = jest.fn();
	render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

	const input = screen.getByPlaceholderText("Add a new todo");
	fireEvent.change(input, { target: { value: "New Todo" } });
	fireEvent.submit(screen.getByRole("form"));

	expect(mockOnAddTodo).toHaveBeenCalledWith("New Todo");
	expect(mockOnAddTodo).toHaveBeenCalledTimes(1);
});
