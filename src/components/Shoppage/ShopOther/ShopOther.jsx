import React from "react";
import { Divider } from "@mui/material";
import { OtherLists } from "./OtherLists";

export const ShopOther = () => {
	return (
		<div>
			<OtherLists list={"completed"} />
			<Divider />

			<OtherLists list={"unCompleted"} />
		</div>
	);
};
