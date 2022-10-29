import React from "react";

import { useDataBase } from "api/useFetchingShopList";

import { List } from "@mui/material";
import { OtherItem } from "./OtherItem";

export const OtherLists = ({ list }) => {
	const { items, completed, unCompleted } = useDataBase("other");

	switch (list) {
		case "full":
			return (
				<List>
					{items.map((other) => (
						<OtherItem
							key={other.uuid}
							other={other}
						/>
					))}
				</List>
			);
		case "completed":
			return (
				<List>
					{completed.map((other) => (
						<OtherItem
							key={other.uuid}
							other={other}
						/>
					))}
				</List>
			);
		case "unCompleted":
			return (
				<List>
					{unCompleted.map((other) => (
						<OtherItem
							key={other.uuid}
							other={other}
						/>
					))}
				</List>
			);

		default:
			return null;
	}
};
