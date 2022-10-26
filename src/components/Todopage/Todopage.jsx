import React from "react";

import { TodoLists } from "./TodoLists";
import { MyDrawer } from "components/UI/MyDrawer/MyDrawer";
import { TodoUseForm } from "./TodoUseForm";
import { Paper } from "@mui/material";

export const TodoPage = () => {
	return (
		<>
			<TodoLists list="unCompleted" />
			<TodoLists list="completed" />

			<MyDrawer children={<TodoUseForm />} />
		</>
	);
};
