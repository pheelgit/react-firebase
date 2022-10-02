import { Homepage } from "components/Homepage/Homepage";
import { ShopList } from "components/ShopList/ShopList";
import { TodoPage } from "components/Postpage/TodoPage";
import { TestPage } from "components/TestPage/TestPage";
// import { Notfoundpage } from "components/notfoundpage/Notfoundpage";

export const routes = [
	{ path: "/", element: <Homepage />, index: "index" },
	{ path: "/shoplist", element: <ShopList /> },
	{ path: "/todos", element: <TodoPage /> },
	{ path: "/test", element: <TestPage /> },
	// { path: "*", element: <Notfoundpage /> },
];
