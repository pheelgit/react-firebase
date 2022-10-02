import React, { useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";
import { useState } from "react";
import { ShopItemInput } from "./ShopItemInput/ShopItemInput";

export const ShopList = () => {
	const [shopList, setShopList] = useState(["qwe"]);

	useEffect(() => {
		const starCountRef = ref(db, "shop-list/");
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			console.log(Object.values(data));
			data && setShopList(Object.values(data));

			setTimeout(() => {}, 1000);
		});
	}, []);

	return (
		<div>
			{shopList.map((el) => (
				<p key={el.id}>{JSON.stringify(el, null, "\t")}</p>
			))}
			<br />
			<ShopItemInput />

			<br />
			<br />
			<br />
			<br />
			<div class="flex space-x-2 justify-center">
				<button
					type="button"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
					className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				>
					Click me
				</button>
			</div>
		</div>
	);
};
