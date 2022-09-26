import { Aboutpage } from "components/Aboutpage/Aboutpage";
import { Blogpage } from "components/Blogpage/Blogpage";
import { Homepage } from "components/Homepage/Homepage";
// import { Notfoundpage } from "components/notfoundpage/Notfoundpage";
import { Postpage } from "components/Postpage/Postpage";

export const routes = [
	{ path: "/", element: <Homepage />, index: "index" },
	{ path: "/about", element: <Aboutpage /> },
	{ path: "/posts", element: <Blogpage /> },
	{ path: "/posts/:id", element: <Postpage /> },
	// { path: "*", element: <Notfoundpage /> },
];
