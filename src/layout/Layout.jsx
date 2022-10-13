import React from "react";
import { AppRouter } from "AppRouter";
import { Navbar } from "./NavBar/Navbar";
import { Footer } from "./Footer/Footer";
import cl from "./Layout.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Restore, Favorite, LocationOn } from "@mui/icons-material";

export const Layout = () => {
	return (
		<div className={cl.layout}>
			<Navbar />
			<main className={cl.main}>
				<AppRouter />
			</main>
			{/* <Footer /> */}
		</div>
	);
};
