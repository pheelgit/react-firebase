import React from "react";
import { AppRouter } from "AppRouter";
import { Navbar } from "./NavBar/Navbar";
import { Footer } from "./Footer/Footer";
import cl from "./Layout.module.css";

export const Layout = () => {
	return (
		<div className={cl.layout}>
			{/* <Footer /> */}
			<main className={cl.main}>
				<AppRouter />
			</main>
			<Navbar />
		</div>
	);
};
