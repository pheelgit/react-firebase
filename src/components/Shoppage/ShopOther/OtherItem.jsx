import React from "react";
import { toggleShopComplete } from "api/useFetchingShopList";
import {
	Checkbox,
	FormControlLabel,
	ListItem,
	ListItemText,
} from "@mui/material";

export const OtherItem = ({ other }) => {
	const { item, complete, uuid } = other;
	return (
		<ListItem>
			<FormControlLabel
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
		</ListItem>
	);
};
