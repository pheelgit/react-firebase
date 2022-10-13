import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
export const TestPage = () => {
	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

	const onSubmit = (data) => console.log(data);
	useEffect(() => {
		setFocus("todo");
	}, []);

	return (
		<div>
			<a href="https://mui.com/material-ui/material-icons/">
				icons
			</a>
		</div>
	);
};
