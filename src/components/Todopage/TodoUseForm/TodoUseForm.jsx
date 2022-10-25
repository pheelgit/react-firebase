import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { addTodo } from "api/useFetchingTodos";

import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Switch,
	TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

export const TodoUseForm = (props) => {
	const {
		register,
		setFocus,
		handleSubmit,
		reset,
		watch,
		control,
		formState: { errors, isValid },
	} = useForm({ mode: "onBlur" });

	const submitForm = (data) => {
		console.log(data);
		addTodo(data);
		reset();
	};

	const watchTg = watch("expired");

	useEffect(() => {
		// setFocus("todo");
		console.log(watchTg);
	}, [watchTg]);

	return (
		<Box component="form" onSubmit={handleSubmit(submitForm)}>
			<Controller
				name="todo"
				control={control}
				defaultValue=""
				rules={{ required: true }}
				render={({ field }) => (
					<TextField {...field} label="todo..." />
				)}
			/>
			<br />
			<br />

			<Controller
				name="expired"
				control={control}
				defaultValue={false}
				defaultChecked={false}
				value={false}
				render={({ field }) => (
					<FormControlLabel
						{...field}
						defaultChecked={false}
						control={<Switch {...field} />}
						label="send tg?"
					/>
				)}
			/>

			<br />
			{watchTg ? (
				<Controller
					name="todoDate"
					control={control}
					defaultValue={null}
					rules={{ required: true }}
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
			) : null}
			<br />
			<br />
			<Button type="submit" variant="contained">
				submit
			</Button>
		</Box>
	);
};
