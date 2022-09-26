import React from "react";
import { useState, useRef, useEffect } from "react";
import { addTodo } from "api/useFetchingTodos";
import cl from "./PostForm.module.css";

export const PostForm = ({ isVisible }) => {
	const defaultTodo = { todo: "", todoDate: "" };
	const [todoItem, setTodoItem] = useState(defaultTodo);
	const inputTodoRef = useRef();
	const inputTodoDateRef = useRef();

	const submitPost = (e) => {
		addTodo(todoItem);
		isVisible(false);
	};
	useEffect(() => {
		inputTodoRef.current.focus();
	}, []);

	const keyDownHandler = (e) => {
		console.log(e.target === inputTodoRef.current);
		if (e.target === inputTodoRef.current && e.code === "Enter") {
			inputTodoDateRef.current.focus();
			return;
		}
		if (
			e.target === inputTodoDateRef.current &&
			e.code === "Enter"
		) {
			submitPost();
		}
	};

	return (
		<form className={cl.form} onSubmit={(e) => e.preventDefault()}>
			<input
				//add focus (useRef)
				ref={inputTodoRef}
				type="text"
				className={cl.formTodo}
				value={todoItem.todo}
				onInput={(e) =>
					setTodoItem({
						...todoItem,
						todo: e.target.value,
					})
				}
				onKeyDown={keyDownHandler}
				placeholder="write todo..."
			/>

			<input
				ref={inputTodoDateRef}
				type="datetime-local"
				className={cl.formDate}
				onChange={(e) =>
					setTodoItem({
						...todoItem,
						todoDate: Date.parse(e.target.value),
					})
				}
			/>

			<button
				type="button"
				className={cl.formBtn}
				onClick={() => {
					submitPost();
				}}
			>
				todo
			</button>

			{JSON.stringify(todoItem)}
		</form>
	);
};
