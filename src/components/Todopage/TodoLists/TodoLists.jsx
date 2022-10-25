import React from "react";

import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { List } from "@mui/material";
import { useDataBase } from "api/useFetchingTodos";

export const TodoLists = ({ list }) => {
	const { todos, completed, unCompleted } = useDataBase();

	if (todos.length === 0) return <h1>no todos</h1>;

	switch (list) {
		case "full":
			return (
				<List>
					{todos.map((todo) => (
						<TodoItem key={todo.uuid} todo={todo} />
					))}
				</List>
			);
		case "completed":
			return (
				<List>
					{completed.map((todo) => (
						<TodoItem key={todo.uuid} todo={todo} />
					))}
				</List>
			);
		case "unCompleted":
			return (
				<List className="">
					{unCompleted.map((todo) => (
						<TodoItem key={todo.uuid} todo={todo} />
					))}
				</List>
			);

		default:
			return null;
	}
};
