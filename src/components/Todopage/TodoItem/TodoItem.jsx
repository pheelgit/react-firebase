import React from "react";
import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
} from "api/useFetchingTodos";
import { sendTg } from "api/useFetchingTodos";
import cl from "./TodoItem.module.css";
import { useEffect } from "react";

export const TodoItem = ({ todo }) => {
	const date = new Date(todo.todoDate);

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

	return (
		<div className={todo.complete ? cl.todoComplete : cl.todo}>
			<button
				className={cl.todoDelete}
				onClick={() => deleteTodo(todo)}
			>
				del
			</button>
			<button className={cl.todoUpdate}>upd</button>

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
