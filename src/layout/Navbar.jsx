import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
	AddShoppingCart,
	BugReport,
	GradingOutlined,
	Home,
	AttachMoney,
} from "@mui/icons-material";
import { useState } from "react";

export const Navbar = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(value);
		}, 200);
	}, [value]);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			className="rounded-xl"
		>
			<BottomNavigationAction
				value={"/"}
				label="home"
				icon={<Home />}
			/>
			<BottomNavigationAction
				value={"shoplist"}
				label="shop"
				icon={<AddShoppingCart />}
			/>
			<BottomNavigationAction
				value={"todos"}
				label="todos"
				icon={<GradingOutlined />}
			/>
			<BottomNavigationAction
				value={"test"}
				label="test"
				icon={<AttachMoney />}
			/>
		</BottomNavigation>
	);
};
