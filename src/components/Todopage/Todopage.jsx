import React, { useState, useEffect } from "react";
import { useFilter } from "hooks/useFilter";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";

import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { TodoForm } from "components/Todopage/TodoForm/TodoForm";

import cl from "./Todopage.module.css";
import { TodoUseForm } from "./TodoUseForm/TodoUseForm";
import AddIcon from "@mui/icons-material/Add";
import { Button, Fab, List } from "@mui/material";

export const TodoPage = () => {
	const [todos, setTodos] = useState([]);
	const [isPopped, setIsPopped] = useState(false);

	const togglePopped = () => {
		setIsPopped(!isPopped);
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
			<Fab
				color="primary"
				aria-label="add"
				className="fixed right-6 bottom-6 ml-auto"
				onClick={() => setIsPopped((prev) => !prev)}
			>
				<AddIcon fontSize="large" />
			</Fab>
			<TodoUseForm />

			{/* {isPopped ? <TodoForm isVisible={togglePopped} /> : null} */}
		</div>
	);
};
