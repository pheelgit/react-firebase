import React, { useEffect } from "react";
import { useFilter } from "hooks/useFilter";

import { db } from "firebase.js";
import { onValue, ref } from "firebase/database";
import { useState } from "react";
import { ShopItem } from "../ShopItem/ShopItem";

export const ShopFood = () => {
	const [items, setItems] = useState([]);

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "shoplist/food"), (snapshot) => {
			const data = snapshot.val();
			data && setItems(Object.values(data));
		});
	}, []);

	const completed = useFilter(items, ["complete", true]);
	const unCompleted = useFilter(items, ["complete", false]);

	return (
		<div>
			{unCompleted.map((item) => (
				<ShopItem key={item.uuid} {...item} />
			))}

			<hr className="h-2 bg-emerald-500" />

			{completed.map((item) => (
				<ShopItem key={item.uuid} {...item} />
			))}
		</div>
	);
};
