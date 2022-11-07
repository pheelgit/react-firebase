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
			data === null
				? setMoney([])
				: setMoney(Object.values(data));
		});
	}, []);
	// { type: "emz", count: 98703, x: 1 },

	useEffect(() => {
		const doneArr = [];

		// var result = Object.keys(obj).map((key) => [key, obj[key]]);
		// const newArr = arr.map((el) => console.log(el));
	}, [money]);

	const traty = useFilter(money, ["type", "traty"]);
	const inc = useFilter(money, ["type", "inc"]);
	return { money, traty, inc };
};
