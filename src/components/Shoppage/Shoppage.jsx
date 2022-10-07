import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppageRouter } from "./ShoppageRouter";
import { ShopItemInput } from "./ShopItemInput/ShopItemInput";

export const Shoppage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("food");
	}, []);
	return (
		<div>
			<Link to="food">food</Link>
			<br />
			<Link to="other">other</Link>
			<br />
			<ShopItemInput />
			<ShoppageRouter />
		</div>
	);
};
