import React, { useState, useEffect } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { PublishedWithChanges } from "@mui/icons-material";

import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
	sendTg,
} from "api/useFetchingTodos";

import {
	ListItem,
	Checkbox,
	ListItemText,
	FormControlLabel,
	Box,
	TextField,
	Switch,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export const TodoItem = ({ todo }) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [updatingTodo, setIsUpdatingTodo] = useState(todo);
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
		<ListItem divider className="flex justify-between">
			{isUpdating ? (
				<>
					<TextField
						variant="standard"
						value={todo.todo}
					/>
					<Switch />
				</>
			) : (
				<FormControlLabel
					label={
						<ListItemText
							primary={todo.todo}
							secondary={
								todo.expired
									? date.toDateString()
									: null
							}
						/>
					}
					control={
						<Checkbox
							checked={todo.complete}
							onChange={() =>
								toggleTodoComplete(todo)
							}
						/>
					}
				/>
			)}

			<Box className="flex gap-4 ">
				{isUpdating ? (
					<PublishedWithChanges
						onClick={() => setIsUpdating(false)}
					/>
				) : (
					<SettingsIcon
						onClick={() => setIsUpdating(true)}
					/>
				)}
				<ClearIcon onClick={() => deleteTodo(todo)} />
			</Box>
		</ListItem>
	);
};
