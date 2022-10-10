import React, { useState, useEffect } from "react";

import { MyPopover } from "components/UI/MyPopover/MyPopover";
import { TodoForm } from "../TodoForm/TodoForm";

import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
	sendTg,
} from "api/useFetchingTodos";

import cl from "./TodoItem.module.css";

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
		setIsUpdating((isUpdating) => !isUpdating);
	};

	return (
		<div
			className={
				todo.complete
					? `${cl.todo} ${cl.todoComplete}`
					: cl.todo
			}
		>
			{isUpdating ? (
				<MyPopover>
					<TodoForm updating {...todo} />{" "}
				</MyPopover>
			) : null}
			<button
				className={cl.todoDeleteBtn}
				onClick={() => deleteTodo(todo)}
			>
				del
			</button>
			<button
				className={cl.todoUpdateBtn}
				onClick={() => toggleUpdating(todo)}
			>
				upd
			</button>

			<input
				className={cl.todoComplete}
				type="checkbox"
				checked={todo.complete}
				onChange={() => toggleTodoComplete(todo)}
			/>

			<span>{date.toDateString()} </span>
			<span> {todo.todo}</span>
			<span> {String(todo.expired)}</span>
		</div>
	);
};
