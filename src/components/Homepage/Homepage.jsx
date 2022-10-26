import { Button, Container, Popover } from "@mui/material";

import React from "react";
import { useState } from "react";

export const Homepage = () => {
	const [openPopover, setOpenPopover] = useState(false);
	const togglePopover = () => setOpenPopover((prev) => !prev);
	return (
		<>
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
		</>
	);
};
