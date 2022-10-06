import React from "react";
import { useRoutes } from "react-router-dom";

import { Homepage } from "components/Homepage/Homepage";
import { Shoppage } from "components/Shoppage/Shoppage";
import { TodoPage } from "components/Todopage/Todopage";
import { TestPage } from "components/TestPage/TestPage";
// import { Notfoundpage } from "components/notfoundpage/Notfoundpage";

export const AppRouter = () => {
	const AppRouter = useRoutes([
		{ path: "/", element: <Homepage />, index: "index" },
		{ path: "shoplist/*", element: <Shoppage /> },
		{ path: "todos/", element: <TodoPage /> },
		{ path: "test/", element: <TestPage /> },
		// { path: "*", element: <Notfoundpage /> },
	]);
	return AppRouter;
};
