import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppageRouter } from "./ShoppageRouter";
import { ShopItemInput } from "./ShopItemInput";

import { Box, Divider } from "@mui/material";
import { ShopNavigate } from "./ShopNavigate";
import { MyDrawer } from "components/UI/MyDrawer/MyDrawer";

export const Shoppage = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname === "/shoplist") navigate("food");
	}, [pathname]);

	return (
		<Box className=" h-full grid items-start grid-rows-[3em_1fr_6em]  ">
			<ShopNavigate />

			<ShoppageRouter />
			<MyDrawer children={<ShopItemInput />} />
		</Box>
	);
};
