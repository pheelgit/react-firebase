import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppageRouter } from "./ShoppageRouter";
import { ShopItemInput } from "./ShopItemInput/ShopItemInput";

import cl from "./ShopPage.module.css";

export const Shoppage = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/shoplist") navigate("food");
	}, [pathname]);

	return (
		<div className={cl.page}>
			<div className={cl.content}>
				<ShoppageRouter />
			</div>
			<div className={cl.main}>
				<span className={cl.nav}>
					<Link
						to="food"
						className={
							pathname.includes("food") &&
							"bg-red-200"
						}
					>
						food
					</Link>
					<Link
						to="other"
						className={
							pathname.includes("other") &&
							"bg-red-200"
						}
					>
						other
					</Link>
				</span>
				<span className={cl.input}>
					<ShopItemInput />
				</span>
			</div>
		</div>
	);
};
