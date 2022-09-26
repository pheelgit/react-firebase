import React from "react";
import { useState } from "react";
import { addTodo } from "api/useFetchingTodos";
import cl from "./PostForm.module.css";

export const PostForm = () => {
	const [todo, setTodo] = useState("");
	const [todoDate, setTodoDate] = useState("");

	const submitPost = (e) => {
		const todoItem = {
			todo,
			todoDate,
		};
		addTodo(todoItem);
	};

	return (
		<form className={cl.form} onSubmit={(e) => e.preventDefault()}>
			<input
				//add focus (useRef)
				value={todo}
				onInput={(e) => setTodo(e.target.value)}
				type="text"
				className={cl.formTodo}
				placeholder="write todo..."
			/>

			<input
				type="datetime-local"
				className={cl.formDate}
				onChange={(e) => setTodoDate(e.target.value)}
			/>

			<button
				type="submit"
				className={cl.formBtn}
				onClick={() => {
					submitPost();
				}}
			>
				todo
			</button>

			{todo}
			{todoDate}
		</form>
	);
};
