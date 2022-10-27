import React from "react";
import { FoodLists } from "./FoodLists";
import { Box, Divider } from "@mui/material";

export const ShopFood = () => {
	return (
		<Box className="">
			<FoodLists list={"completed"} />
			<Divider />
			<FoodLists list={"unCompleted"} />
		</Box>
	);
};
