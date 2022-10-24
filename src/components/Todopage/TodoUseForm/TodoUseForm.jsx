import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { addTodo } from "api/useFetchingTodos";
// import {
// 	FormContainer,
// 	TextFieldElement,
// 	DateTimePickerElement,
// } from "react-hook-form-mui";
import { Button, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const TodoUseForm = (props) => {
	const {
		register,
		setFocus,
		handleSubmit,
		reset,
		control,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const submitForm = (data) => {
		console.log(data);
		console.log(typeof data.todoDate);
		addTodo(data);
		reset();
	};

	useEffect(() => {
		setFocus("todo");
	}, []);

	return (
		<form
			onSubmit={handleSubmit(submitForm)}
			className="flex flex-col gap-4 max-w-xs border-2 border-purple-500 border-solid p-4"
		>
			<Controller
				name="todo"
				label="todo..."
				control={control}
				defaultValue=""
				render={({ field }) => (
					<TextField {...field} label="todo..." />
				)}
			/>
			<Controller
				name="todoDate"
				control={control}
				defaultValue={null}
				render={({ field }) => (
					<DateTimePicker
						{...field}
						label="Date&Time picker"
						renderInput={(field) => (
							<TextField {...field} />
						)}
					/>
				)}
			/>
			<br />

			<Button type="submit" variant="contained">
				submit
			</Button>
		</form>
	);

	// return (
	// 	<FormContainer
	// 		defaultValues={{ todo: "", todoDate: undefined }}
	// 		onSuccess={(data) => handleSubmit(submitForm(data))}
	// 	>
	// 		<TextFieldElement
	// 			// name="todo"
	// 			label="todo..."
	// 			required
	// 			{...register("todo")}
	// 		/>
	// 		<DateTimePickerElement name="todoDate" label="date..." />
	// 		<Button type="submit" variant="contained">
	// 			add
	// 		</Button>
	// 		<br />
	// 		<br />
	// 		<br />
	// 		<br />
	// 		<br />
	// 		<br />
	// 	</FormContainer>
	// );
};
