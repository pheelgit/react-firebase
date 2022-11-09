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
	const [food2021] = useDataForChartLine1({ year: 2021, id: "food" });
	console.log(food2021);

	return (
		<>
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
