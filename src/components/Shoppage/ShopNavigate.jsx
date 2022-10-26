import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopItemInput } from "./ShopItemInput";

export const ShopNavigate = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname === "/shoplist") navigate("food");
	}, [pathname]);
	return (
		<div>
			<Link
				to="food"
				className={
					pathname.includes("food") ? "bg-red-200" : ""
				}
			>
				food
			</Link>
			<Link
				to="other"
				className={
					pathname.includes("other") ? "bg-red-200" : ""
				}
			>
				other
			</Link>
		</div>
	);
};
