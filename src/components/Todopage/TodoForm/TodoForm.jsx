import React from "react";
import { useState, useRef, useEffect } from "react";
import { addTodo } from "api/useFetchingTodos";
import cl from "./TodoForm.module.css";

export const TodoForm = (props) => {
	const {
		isVisible,
		todo = "",
		todoDate = "",
		updating = false,
		uuid = "",
	} = props;
	console.log("form upd");

	const [todoItem, setTodoItem] = useState({ todo, todoDate });

	const submitTodo = () => {};

	return (
		<form className={cl.form} onSubmit={(e) => e.preventDefault()}>
			<button
				type="button"
				data-mdb-ripple="true"
				data-mdb-ripple-color="light"
				className={cl.formBtn}
				onClick={() => {
					submitTodo();
				}}
			>
				asdasd
			</button>
		</form>
	);
};
