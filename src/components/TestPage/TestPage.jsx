import React, { useEffect } from "react";
import { useDataBaseMoney, useDataForChartLine1 } from "api/useMoney";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Tooltip } from "@mui/material";

export const TestPage = (props) => {
	const [food2021] = useDataForChartLine1({ year: 2022, id: "food" });
	return (
		<>
			<br />
			<br />
			<br />
			<LineChart
				width={320}
				height={150}
				data={food2021}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="mounth" />
				<YAxis />
				<Tooltip />
				<Line
					type="monotone"
					dataKey="count"
					stroke="#8884d8"
				/>
			</LineChart>
		</>
	);
};
