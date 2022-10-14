import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { addTodo } from "api/useFetchingTodos";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Button, TextField } from "@mui/material";

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
	const [value, setValue] = useState("");

	// const [value, setValue] =
	// 	(React.useState < Dayjs) | (null > dayjs("2014-08-18T21:11:54"));

	const handleChange = () => {
		setValue("new date value");
		console.log("change value");
	};

	// useEffect(() => {
	// 	setFocus("todo");
	// }, []);

	return (
		<FormContainer
			defaultValues={{ name: "" }}
			onSuccess={(data) => console.log(data)}
		>
			<TextFieldElement name="name" label="todo..." required />
			<DateTimePicker
				label="Date&Time picker"
				value={value}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
			/>
			<br />
			<Button type="submit" variant="contained">
				add
			</Button>
		</FormContainer>
	);
};
