import { db } from "firebase.js";
import { uid } from "uid";
import {
	set,
	ref,
	onValue,
	remove,
	update,
	get,
	child,
	push,
} from "firebase/database";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "hooks/useFilter";

export const useDataBaseMoney = (year) => {
	const [money, setMoney] = useState([]);

	//connecting to db
	useEffect(() => {
		onValue(ref(db, `money/${year}`), (snapshot) => {
			const data = snapshot.val();
			data && setMoney(Object.values(data));
		});
	}, []);

	const traty = useFilter(money, ["type", "traty"]);
	const inc = useFilter(money, ["type", "inc"]);

	return { money, traty, inc };
};

const MOUNTHS = [
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"now",
	"dec",
];

const objToArr = (obj) => {
	const outArr = MOUNTHS.map((el) => ({
		mounth: el,
		count: obj[el],
		type: obj.type,
		id: obj.id,
	}));
	return outArr;
};

export const useDataForChartLine1 = ({ year, id, type }) => {
	const { money: data } = useDataBaseMoney(year);
	const [dataForChartLine, setDataForChartLine] = useState([]);

	useEffect(() => {
		let newData = [...data].map((el) => objToArr(el));

		if (type) {
			return setDataForChartLine(
				newData.filter(([el]) => el.type === type)
			);
		}

		if (id) {
			return setDataForChartLine(
				newData.filter(([el]) => el.id === id)
			);
		}

		setDataForChartLine(newData);
	}, [data]);

	return dataForChartLine;
};

export const useDataForChartLine = (data, id) => {
	const [newData, setNewData] = useState([]);
	const [mounthData, setMounthNewData] = useState([]);
	useEffect(() => {
		setNewData(data.map((el) => objToArr(el)));
		const [newMounthData] = newData.filter(([el]) => el.id === id);
		setMounthNewData(newMounthData);
	}, [data]);

	if (id) return mounthData;

	return newData;
};

const mounthSumm = (mounth, data) => {
	const filteredMounth = data.map((el) =>
		el.filter((el2) => el2.mounth === mounth)
	);

	const summ = filteredMounth.reduce(
		(sum, [curr]) => sum + curr.count,
		0
	);

	return summ;
};

// console.log(mounthSumm("jan", trueData));

const summOfYear = (data) => {
	const newData = data.map((id) => ({
		id: id[0].id,

		count: id.reduce((summ, mounth) => summ + mounth.count, 0),
	}));

	return newData;
};

// console.log(summOfYear(trueData));
