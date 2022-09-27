import React from "react";
import {
	deleteTodo,
	toggleTodoComplete,
	toggleTodoExpired,
} from "api/useFetchingTodos";
import { sendTg } from "api/useFetchingTodos";
import cl from "./TodoItem.module.css";
import { useEffect } from "react";
import { useState } from "react";

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
				// data={todo.uuid}
				className="bg-red-200 mx-2 border-x-red-800"
				onClick={() => deleteTodo(todo)}
			>
				delete
			</button>
			<button className="bg-green-200 mx-2 border-x-gray-800">
				update
			</button>
			<button
				className="mx-2"
				onClick={() => toggleTodoComplete(todo)}
			>
				{todo.complete.toString()}
			</button>

			<span>{date.toDateString()} </span>
			<span> {todo.todo}</span>
			<span> {String(todo.expired)}</span>
		</div>
	);
};
