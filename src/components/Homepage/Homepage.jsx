import { useDataBaseMoney } from "api/useMoney";
import axios from "axios";
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
	const { inc } = useDataBaseMoney(2022);

	return (
		<LineChart
			width={300}
			height={200}
			// data={objArr}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="type" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="count" stroke="#8884d8" />
		</LineChart>
	);
};
