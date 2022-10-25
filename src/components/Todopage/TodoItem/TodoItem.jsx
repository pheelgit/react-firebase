import React, { useState, useEffect } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { PublishedWithChanges } from "@mui/icons-material";

import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
	sendTg,
	updateTodo,
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
import { Controller, useForm } from "react-hook-form";

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

	const { handleSubmit, watch, control, register, setFocus } = useForm();

	const newTodo = watch("todo");
	//update todo
	const handleUpdate = () => {
		setIsUpdating(false);
		updateTodo({ ...todo, todo: newTodo });
	};

	useEffect(() => {
		setFocus("todo");
	}, [setFocus]);

	return (
		<ListItem divider className="flex justify-between">
			{isUpdating ? (
				<Box
					component="form"
					onSubmit={handleSubmit(handleUpdate)}
				>
					<Controller
						name="todo"
						control={control}
						defaultValue={todo.todo}
						rules={{ required: true }}
						render={({ field }) => (
							<TextField
								{...field}
								variant="standard"
							/>
						)}
					/>
				</Box>
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
						onClick={() => handleUpdate(todo)}
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
