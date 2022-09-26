import React from "react";
import { useState } from "react";
import cl from "./PostForm.module.css";

export const PostForm = () => {
	const [todo, setTodo] = useState("");
	const [todoDate, setTodoDate] = useState("");

	const submitPost = (e) => {
		e.stopPropagation();

		console.log(e);
	};

	return (
		<form className={cl.form} onSubmit={(e) => e.stopPropagation()}>
			<input
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
