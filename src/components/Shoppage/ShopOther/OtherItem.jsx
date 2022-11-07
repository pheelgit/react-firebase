import React from "react";
import { deleteShopItem, toggleShopComplete } from "api/useFetchingShopList";
import {
	Checkbox,
	FormControlLabel,
	ListItem,
	ListItemText,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";

export const OtherItem = ({ other }) => {
	const { item, complete, uuid } = other;
	const { "*": itemType } = useParams();
	return (
		<ListItem className="flex">
			<FormControlLabel
				className="grow"
				label={<ListItemText primary={item} />}
				control={
					<Checkbox
						checked={complete}
						onChange={() =>
							toggleShopComplete("other", other)
						}
					/>
				}
			/>

			<ClearIcon
				onClick={() => deleteShopItem(itemType, uuid)}
			/>
		</ListItem>
	);
};
