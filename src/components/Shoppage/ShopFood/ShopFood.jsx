import React, { useEffect } from "react";

import { db } from "firebase.js";
import { onValue, ref } from "firebase/database";
import { useState } from "react";

export const ShopFood = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		onValue(ref(db, "shoplist/food"), (snapshot) => {
			const data = snapshot.val();
			data && setItems(Object.values(data));
		});
	}, []);

	return <div>{JSON.stringify(items)}</div>;
};
