import React, { useEffect } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { ShoppageRouter } from "./ShoppageRouter";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";
import { useState } from "react";
import { ShopItemInput } from "./ShopItemInput/ShopItemInput";
import { ShopFood } from "./ShopFood/ShopFood";
import { ShopOther } from "./ShopOther/ShopOther";

export const Shoppage = () => {
	const [shopList, setShopList] = useState(["qwe"]);

	useEffect(() => {
		const starCountRef = ref(db, "shop-list/");
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			data && setShopList(Object.values(data));
		});
	}, []);

	return (
		<div>
			qweqweqweqw
			<br />
			<Link to="food">food</Link>
			<br />
			<Link to="other">other</Link>
			<br />
			<ShopItemInput />
			<ShoppageRouter />
		</div>
	);
};
