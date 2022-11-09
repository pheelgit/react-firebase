import { Typography } from "@mui/material";
import {
	useDataBaseMoney,
	useDataForChartLine,
	useDataForChartLine1,
} from "api/useMoney";
import axios from "axios";
import { useFilter } from "hooks/useFilter";
import React, { useEffect } from "react";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
} from "recharts";

export const Homepage = () => {
	return (
		<>
			<Typography> test</Typography>
		</>
	);
};
