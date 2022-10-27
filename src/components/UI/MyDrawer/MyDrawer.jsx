import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey, lightBlue, lightGreen } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor:
		theme.palette.mode === "light" ? grey[500] : grey[900],
	borderRadius: 3,
	position: "absolute",
	top: 8,
	left: "calc(50% - 15px)",
}));

export const MyDrawer = ({ children }, ...props) => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: "visible",
						right: "0.5em",
						left: "0.5em",
					},
				}}
			/>

			<SwipeableDrawer
				anchor="bottom"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<StyledBox
					sx={{
						backgroundColor: lightBlue[200],
						position: "absolute",
						top: -drawerBleeding,
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
						visibility: "visible",
						right: 0,
						left: 0,
					}}
					className="bg-red-500"
				>
					<Puller />

					<Typography
						sx={{ p: 2, color: "text.secondary" }}
					>
						<br />
					</Typography>
				</StyledBox>
				{children}
			</SwipeableDrawer>
		</>
	);
};
