import React from "react";
import { deleteTodo, toggleTodo } from "api/useFetchingTodos";
import cl from "./TodoItem.module.css";

export const TodoItem = ({ todo }) => {
	return (
		<div
			// key={todo.uuid}
			className={todo.complete ? cl.todoComplete : cl.todo}
		>
			<button
				data={todo.uuid}
				className="bg-red-200 mx-2 border-x-red-800"
				onClick={() => deleteTodo(todo)}
			>
				delete
			</button>
			<button className="bg-green-200 mx-2 border-x-gray-800">
				update
			</button>
			<button className="mx-2" onClick={() => toggleTodo(todo)}>
				{todo.complete.toString()}
			</button>
			<span>{todo.todo}</span>
		</div>
	);
};
