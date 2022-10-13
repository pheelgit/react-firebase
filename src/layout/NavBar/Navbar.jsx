import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomLink } from "components/UI/MyLink/CustomLink";
import cl from "./Navbar.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
	AddShoppingCart,
	BugReport,
	Favorite,
	GradingOutlined,
	Home,
	LocationOn,
	Restore,
} from "@mui/icons-material";
import { useState } from "react";

export const Navbar = () => {
	const [value, setValue] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(value);
			console.log(value);
		}, 200);
	}, [value]);

	return (
		<>
			<BottomNavigation
				className="sticky top-0"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
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
					icon={<BugReport />}
				/>
			</BottomNavigation>
		</>
	);
};
