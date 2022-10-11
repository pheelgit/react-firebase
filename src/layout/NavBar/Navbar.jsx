import React from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "components/UI/MyLink/CustomLink";
import cl from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to="/shoplist">shoplist</CustomLink>
				<CustomLink to="/todos">todos</CustomLink>
				<CustomLink to="/test">test page</CustomLink>
			</nav>
		</>
	);
};
