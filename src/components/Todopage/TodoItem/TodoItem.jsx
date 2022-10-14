import React, { useState, useEffect } from "react";

import { MyPopover } from "components/UI/MyPopover/MyPopover";
import { TodoForm } from "../TodoForm/TodoForm";
import ClearIcon from "@mui/icons-material/Clear";

import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
	sendTg,
} from "api/useFetchingTodos";

import cl from "./TodoItem.module.css";
import { ListItem, Checkbox, ListItemText } from "@mui/material";

export const TodoItem = ({ todo }) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const date = new Date(todo.todoDate);

	// checking to sendTG
	useEffect(() => {
		const checkDate = setInterval(() => {
			if (
				todo.expired === false &&
				Date.parse(new Date()) > todo.todoDate
			) {
				toggleTodoExpired(todo);
				sendTg(todo.todo);
				clearInterval(checkDate);
			}
		}, 1000);

		return () => clearInterval(checkDate);
	}, []);

	//update todo
	const toggleUpdating = (todo) => {
		console.log("update", todo);
		// setIsUpdating((isUpdating) => !isUpdating);
	};

	return (
		<ListItem divider>
			<Checkbox
				checked={todo.complete}
				onChange={() => toggleTodoComplete(todo)}
			/>
			<ListItemText
				primary={todo.todo}
				secondary={todo.expired ? date.toDateString() : null}
			/>

			<ClearIcon onClick={() => deleteTodo(todo)} />
		</ListItem>
	);
};
