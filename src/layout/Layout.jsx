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
		<>
			<Box className="flex flex-col gap-4 p-2 h-screen ">
				<Paper
					children={<Navbar />}
					elevation={10}
					className="rounded-xl overflow-hidden"
				/>
				<Paper
					component="main"
					className="rounded-xl overflow-hidden grow"
					children={<AppRouter />}
					elevation={10}
				/>
			</Box>
			{/* <AppRouter />
			</Box> */}
			{/* <Box sx={{ flexGrow: 1, width: "100%" }}>
				<Grid container spacing={1} columns={1}>
					<Grid
						display="flex"
						justifyContent="stretch"
						alignItems="stretch"
					>
						<Paper
							children={<Navbar />}
							elevation={10}
						/>
					</Grid>
					<Grid
						display="flex"
						justifyContent="stretch"
						alignItems="stretch"
					>
						<Box component="main">
							<AppRouter />
						</Box>
					</Grid>
				</Grid>
			</Box> */}
		</>
	);
};
