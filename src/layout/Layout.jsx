import React from "react";
import { AppRouter } from "router/AppRouter";
import { Navbar } from "./NavBar/Navbar";
import { Footer } from "./Footer/Footer";
import cl from "./Layout.module.css";

export const Layout = () => {
	return (
		<div className={cl.layout}>
			<Navbar />
			<main className={cl.main}>
				<AppRouter />
			</main>
			<Footer />
		</div>
	);
};
