import React from "react";
import { CustomLink } from "components/CustomLink";
import cl from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<>
			<nav className={cl.nav}>
				<CustomLink to="/">home</CustomLink>
				<CustomLink to="/shoplist">shoplist</CustomLink>
				<CustomLink to="/todos">todos</CustomLink>
			</nav>
		</>
	);
};
