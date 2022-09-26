import { Aboutpage } from "layout/pages/Aboutpage/Aboutpage";
import { Blogpage } from "layout/pages/Blogpage/Blogpage";
import { Homepage } from "layout/pages/Homepage/Homepage";
import { Notfoundpage } from "layout/pages/notfoundpage/Notfoundpage";
import { Postpage } from "layout/pages/Postpage/Postpage";

export const routes = [
	{ path: "/", element: <Homepage />, index: "index" },
	{ path: "/about", element: <Aboutpage /> },
	{ path: "/posts", element: <Blogpage /> },
	{ path: "/posts/:id", element: <Postpage /> },
	{ path: "*", element: <Notfoundpage /> },
];
