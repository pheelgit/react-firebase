import React from "react";
import { useDataBase } from "api/useFetchingShopList";
import { List } from "@mui/material";
import { FoodItem } from "./FoodItem";

export const FoodLists = ({ list }) => {
	const { lists, completed, unCompleted } = useDataBase("food");

	switch (list) {
		case "full":
			return (
				<List>
					{lists.map((food) => (
						<FoodItem key={food.uuid} food={food} />
					))}
				</List>
			);
		case "completed":
			return (
				<List>
					{completed.map((food) => (
						<FoodItem key={food.uuid} food={food} />
					))}
				</List>
			);
		case "unCompleted":
			return (
				<List>
					{unCompleted.map((food) => (
						<FoodItem key={food.uuid} food={food} />
					))}
				</List>
			);

		default:
			return null;
	}
};
