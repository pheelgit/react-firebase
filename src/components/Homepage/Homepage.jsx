import { Button, ButtonBase, Container, Popover } from "@mui/material";
import {
	AccessAlarm,
	ThreeDRotation,
	AccountCircle,
} from "@mui/icons-material";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from "react";
import cl from "./Homepage.module.css";
import { useState } from "react";

export const Homepage = () => {
	const [openPopover, setOpenPopover] = useState(false);
	const togglePopover = () => setOpenPopover((prev) => !prev);
	return (
		<div className={cl.homePage}>
			<Container>
				<Button
					variant="contained"
					className="bg-red=500"
					onClick={togglePopover}
				>
					toggle
					<Popover open={openPopover}>qwewe</Popover>
				</Button>
			</Container>
		</div>
	);
};
