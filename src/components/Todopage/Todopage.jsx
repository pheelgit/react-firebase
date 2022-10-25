import React from "react";

import { MyDrawer } from "components/UI/MyDrawer/MyDrawer";
import { TodoUseForm } from "./TodoUseForm/TodoUseForm";
import { TodoLists } from "./TodoLists/TodoLists";

export const TodoPage = () => {
	return (
		<>
			<TodoLists list="completed" />
			<TodoLists list="unCompleted" />

			<MyDrawer>
				<TodoUseForm />
			</MyDrawer>
		</>
	);
};
