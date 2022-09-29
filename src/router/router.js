import { Homepage } from "components/Homepage/Homepage";
import { ShopList } from "components/ShopList/ShopList";
import { TodoPage } from "components/Postpage/TodoPage";
// import { Notfoundpage } from "components/notfoundpage/Notfoundpage";

export const routes = [
	{ path: "/", element: <Homepage />, index: "index" },
	{ path: "/shoplist", element: <ShopList /> },
	{ path: "/todos", element: <TodoPage /> },
	// { path: "*", element: <Notfoundpage /> },
];
