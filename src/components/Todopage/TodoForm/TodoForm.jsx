import React from "react";
import { useState, useRef, useEffect } from "react";
import { addTodo } from "api/useFetchingTodos";
import cl from "./TodoForm.module.css";

const defaultTodo = { todo: "", todoDate: "" };

export const TodoForm = ({ isVisible }) => {
	const [todoItem, setTodoItem] = useState(defaultTodo);
	const inputTodoRef = useRef();
	const inputTodoDateRef = useRef();

	const submitTodo = (e) => {
		addTodo(todoItem);
		isVisible(false);
		setTodoItem(defaultTodo);
	};
	useEffect(() => {
		inputTodoRef.current.focus();
	}, []);

	const keyDownHandler = (e) => {
		if (e.target === inputTodoRef.current && e.code === "Enter") {
			inputTodoDateRef.current.focus();
			return;
		}
		if (
			e.target === inputTodoDateRef.current &&
			e.code === "Enter"
		) {
			submitTodo();
		}
	};

	return (
		<form className={cl.form} onSubmit={(e) => e.preventDefault()}>
			<input
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
					submitTodo();
				}}
			>
				add todo
			</button>
		</form>
	);
};
