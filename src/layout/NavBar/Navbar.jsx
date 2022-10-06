import React from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "components/CustomLink";
import cl from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to="/shoplist">shoplist</CustomLink>
				<Link to="/shoplist/food"> food </Link>
				<Link to="/shoplist/other"> other </Link>
				<CustomLink to="/todos">todos</CustomLink>
				<CustomLink to="/test">test page</CustomLink>
			</nav>
		</>
	);
};
