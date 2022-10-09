import React, { useEffect } from "react";

import { db } from "firebase.js";
import { onValue, ref } from "firebase/database";
import { useState } from "react";
import { ShopItem } from "../ShopItem/ShopItem";

export const ShopOther = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		onValue(ref(db, "shoplist/other"), (snapshot) => {
			const data = snapshot.val();
			data && setItems(Object.values(data));
		});
	}, []);

	return (
		<div>
			<hr className="h-2 bg-indigo-800" />
			{items
				.filter((item) => !item.complete)
				.map((item) => (
					<ShopItem key={item.uuid} {...item} />
				))}
			<hr className="h-2 bg-indigo-800" />
			{items
				.filter((item) => item.complete)
				.map((item) => (
					<ShopItem key={item.uuid} {...item} />
				))}
		</div>
	);
};
