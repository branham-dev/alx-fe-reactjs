import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoForm from "../src/components/AddTodoForm";

describe("AddTodoForm Component", () => {
	test("adds a new todo when form is submitted", () => {
		const addTodo = jest.fn();
		render(<AddTodoForm addTodo={addTodo} />);

		const input = screen.getByPlaceholderText("Add a new todo");
		const button = screen.getByText("Add");

		fireEvent.change(input, { target: { value: "New Todo" } });
		fireEvent.click(button);

		expect(addTodo).toHaveBeenCalledWith("New Todo");
		expect(input.value).toBe("");
	});

	test("does not add an empty todo", () => {
		const addTodo = jest.fn();
		render(<AddTodoForm addTodo={addTodo} />);

		const button = screen.getByText("Add");
		fireEvent.click(button);

		expect(addTodo).not.toHaveBeenCalled();
	});
});
