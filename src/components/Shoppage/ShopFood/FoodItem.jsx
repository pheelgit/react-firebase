import React from "react";
import {
	Checkbox,
	FormControlLabel,
	ListItem,
	ListItemText,
} from "@mui/material";
import { toggleShopComplete } from "api/useFetchingShopList";
import { useParams } from "react-router-dom";

export const FoodItem = ({ food }) => {
	const { item, complete, uuid } = food;
	const { "*": itemType } = useParams();
	return (
		<ListItem>
			<FormControlLabel
				label={<ListItemText primary={item} />}
				control={
					<Checkbox
						checked={complete}
						onChange={() =>
							toggleShopComplete(itemType, food)
						}
					/>
				}
			/>
		</ListItem>
	);
};
