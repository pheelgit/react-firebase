import React, { useState, useEffect } from "react";
import { useFilter } from "hooks/useFilter";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";

import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { MyDrawer } from "components/UI/MyDrawer/MyDrawer";
// import { TodoForm } from "components/Todopage/TodoForm/TodoForm";

import cl from "./Todopage.module.css";
import { TodoUseForm } from "./TodoUseForm/TodoUseForm";
import AddIcon from "@mui/icons-material/Add";
import {
	Button,
	Drawer,
	Fab,
	List,
	Popover,
	Typography,
} from "@mui/material";

export const TodoPage = () => {
	const [todos, setTodos] = useState([]);

	const [isPopped, setIsPopped] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			data === null
				? setTodos([])
				: setTodos(Object.values(data));
		});
	}, []);

	//completed and unCompleted todos
	const completed = useFilter(todos, ["complete", true]);
	const unCompleted = useFilter(todos, ["complete", false]);

	return (
		<div className={cl.todoPage}>
			{todos.length === 0 ? <h1>no todos</h1> : null}
			<List>
				{unCompleted.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</List>
			<div>
				{completed.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</div>
			<br />

			<MyDrawer>
				<TodoUseForm />
			</MyDrawer>
		</div>
	);
};
