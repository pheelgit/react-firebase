import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopPageRouter } from "./ShopPageRouter";
import { ShopItemInput } from "./ShopItemInput";

import { Box } from "@mui/material";
import { ShopNavigate } from "./ShopNavigate";

export const Shoppage = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/shoplist") navigate("food");
	}, [pathname]);

	return (
		<>
			<ShopPageRouter />
			<ShopNavigate />
			<ShopItemInput />
		</>
	);
};
