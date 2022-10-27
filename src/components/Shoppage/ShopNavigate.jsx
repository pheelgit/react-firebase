import React, { useEffect, useState } from "react";

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Divider,
	Paper,
	Stack,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export const ShopNavigate = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	// default route to food shop
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname === "/shoplist") {
			navigate("food");
			setValue("food");
		}
	}, [pathname]);

	//navigate
	useEffect(() => {
		navigate(value);
	}, [value]);

	return (
		<Box sx={{ width: "50%" }}>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					value="food"
					label="food"
					icon={
						<LocalGroceryStoreIcon fontSize="medium" />
					}
				/>
				<BottomNavigationAction
					value={"other"}
					label="other"
					icon={<StorefrontIcon fontSize="large" />}
				/>
			</BottomNavigation>
		</Box>
	);
};

const qwe = `	`;
