import React from "react";
import { FoodLists } from "./FoodLists";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	Typography,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";

export const ShopFood = () => {
	return (
		<Box className="">
			<FoodLists list={"unCompleted"} />

			<Divider />

			<Accordion>
				<AccordionSummary expandIcon={<DoneIcon />}>
					<Typography> completed</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FoodLists list={"completed"} />
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};
