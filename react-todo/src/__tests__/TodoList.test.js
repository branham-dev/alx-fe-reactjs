import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../src/components/TodoList";

describe("TodoList Component", () => {
	test("renders initial todo items", () => {
		const todos = [
			{ id: 1, text: "Learn React", completed: false },
			{ id: 2, text: "Learn Testing", completed: false },
		];

		render(<TodoList initialTodos={todos} />);

		expect(screen.getByText("Learn React")).toBeInTheDocument();
		expect(screen.getByText("Learn Testing")).toBeInTheDocument();
	});

	test("toggles todo completion status", () => {
		const todos = [{ id: 1, text: "Learn React", completed: false }];
		render(<TodoList initialTodos={todos} />);

		const todoItem = screen.getByText("Learn React");
		fireEvent.click(todoItem);

		expect(todoItem).toHaveClass("completed");
	});

	test("deletes a todo item", () => {
		const todos = [{ id: 1, text: "Learn React", completed: false }];
		render(<TodoList initialTodos={todos} />);

		const deleteButton = screen.getByRole("button", { name: /delete/i });
		fireEvent.click(deleteButton);

		expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
	});
});
