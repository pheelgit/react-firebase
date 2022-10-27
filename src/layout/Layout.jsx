import React from "react";
import { AppRouter } from "AppRouter";
import { Navbar } from "./Navbar";
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export const Layout = () => {
	return (
		<Box className="flex flex-col gap-4 p-2 h-screen ">
			<Paper
				children={<Navbar />}
				elevation={10}
				className=" basis-1/12 sticky  top-2 opacity-100"
			/>
			<Paper
				component="main"
				children={<AppRouter />}
				elevation={10}
				className="rounded-xl  basis-11/12 mt-1/12 overflow-scroll"
			/>
		</Box>
	);
};
