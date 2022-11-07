import React from "react";
import {
	Checkbox,
	FormControlLabel,
	InputAdornment,
	ListItem,
	ListItemButton,
	ListItemText,
	ListSubheader,
	TextField,
	Typography,
} from "@mui/material";
import { toggleShopComplete } from "api/useFetchingShopList";
import { useParams } from "react-router-dom";

import ClearIcon from "@mui/icons-material/Clear";

export const FoodItem = ({ food }) => {
	const { item, complete, uuid, quantity, typeQuantity } = food;
	const { "*": itemType } = useParams();
	return (
		<ListItem className="flex justify-between">
			<FormControlLabel
				className="grow"
				label={
					<ListItemText
						primary={item}
						secondary={
							<Typography>
								{quantity} {typeQuantity}
							</Typography>
						}
					/>
				}
				control={
					<Checkbox
						checked={complete}
						onChange={() =>
							toggleShopComplete(itemType, food)
						}
					/>
				}
			/>

			<ClearIcon />
		</ListItem>
	);
};
