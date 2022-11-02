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
	const data = [
		{ type: "emz", count: 98703, x: 1 },
		{ type: "emz", count: 70863, x: 2 },
		{ type: "emz", count: 99906, x: 3 },
		{ type: "emz", count: 110940, x: 4 },
		{ type: "emz", count: 111173, x: 5 },
		{ type: "emz", count: 96503, x: 6 },
		{ type: "emz", count: 96424, x: 7 },
		{ type: "emz", count: 91702, x: 8 },
		{ type: "emz", count: 93314, x: 9 },
		{ type: "emz", count: 102980, x: 10 },
	];

	return (
		<LineChart
			width={300}
			height={200}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="count" stroke="#8884d8" />
		</LineChart>
	);
};
