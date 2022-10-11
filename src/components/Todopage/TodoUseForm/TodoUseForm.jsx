import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { addTodo } from "api/useFetchingTodos";

import cl from "./TodoUseForm.module.css";

export const TodoUseForm = (props) => {
	const {
		register,
		setFocus,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });
	const submitForm = (data) => {
		addTodo(data);
		reset();
	};

	useEffect(() => {
		setFocus("todo");
	}, []);
	return (
		<form
			className={cl.container}
			onSubmit={handleSubmit(submitForm)}
		>
			<input
				className={cl.todoInput}
				placeholder="todo..."
				{...register("todo", { required: true })}
			/>

			<input
				className={cl.todoDateInput}
				type={"datetime-local"}
				{...register("todoDate")}
			/>
			<button
				className={cl.btn}
				type="submit"
				disabled={!isValid}
			>
				add
			</button>
		</form>
	);
};
