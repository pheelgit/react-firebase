import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addShopItem } from "api/useFetchingShopList";

import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/system";
import {
	Button,
	FilledInput,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	TextField,
	Typography,
} from "@mui/material";

export const ShopItemInput = () => {
	const { "*": itemType } = useParams();

	const { control, handleSubmit, reset } = useForm();

	const submitForm = (foodItem) => {
		console.log(foodItem);
		addShopItem(itemType, foodItem);
		reset();
	};

	return (
		<Box component="form" onSubmit={handleSubmit(submitForm)}>
			<Controller
				name="item"
				control={control}
				defaultValue=""
				rules={{ required: true }}
				render={({ field }) => (
					<TextField {...field} label="food..." />
				)}
			/>
			<br />
			<br />
			<Controller
				name="quantity"
				defaultValue={1}
				control={control}
				render={({ field }) => (
					<TextField
						sx={{ maxWidth: 80 }}
						type={"number"}
						{...field}
						label="кол-во"
					/>
				)}
			/>
			<Controller
				name="typeQuantity"
				defaultValue="kg"
				control={control}
				render={({ field }) => (
					<FormControl
						fullWidth
						{...field}
						sx={{ maxWidth: 80 }}
					>
						<Select
							{...field}
							control={control}
							defaultValue={"kg"}
						>
							<MenuItem value={"kg"}>
								кг
							</MenuItem>
							<MenuItem value={"pieces"}>
								шт.
							</MenuItem>
						</Select>
					</FormControl>
				)}
			/>

			<br />
			<br />

			<Button type="submit" variant="contained">
				submit
			</Button>
		</Box>
	);
};
