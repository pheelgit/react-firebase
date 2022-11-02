import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Divider,
	Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { OtherLists } from "./OtherLists";

export const ShopOther = () => {
	return (
		<Box>
			<OtherLists list={"unCompleted"} />
			<Divider />

			<Accordion>
				<AccordionSummary expandIcon={<DoneIcon />}>
					<Typography> completed</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<OtherLists list={"completed"} />
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};
