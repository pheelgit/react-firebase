import React from "react";

import { TodoLists } from "./TodoLists";
import { MyDrawer } from "components/UI/MyDrawer/MyDrawer";
import { TodoUseForm } from "./TodoUseForm";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Divider,
	Typography,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";

export const TodoPage = () => {
	return (
		<>
			<TodoLists list="unCompleted" />
			<Divider />

			<Accordion>
				<AccordionSummary expandIcon={<DoneIcon />}>
					<Typography> completed</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TodoLists list="completed" />
				</AccordionDetails>
			</Accordion>

			<MyDrawer children={<TodoUseForm />} />
		</>
	);
};
