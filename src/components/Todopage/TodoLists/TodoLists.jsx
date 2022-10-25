import React, { useState, useEffect } from "react";
import { useFilter } from "hooks/useFilter";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";

import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { List } from "@mui/material";

export const TodoLists = ({ list }) => {
	const [todos, setTodos] = useState([]);
	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			data === null
				? setTodos([])
				: setTodos(Object.values(data));
		});
	}, []);

	const completed = useFilter(todos, ["complete", true]);
	const unCompleted = useFilter(todos, ["complete", false]);

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
