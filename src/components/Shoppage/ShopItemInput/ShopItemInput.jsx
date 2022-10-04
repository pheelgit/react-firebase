import React, { useState, useRef } from "react";

export const ShopItemInput = () => {
	const defaultShopItem = { item: "", type: "food" };
	const [shopItem, setShopItem] = useState(defaultShopItem);
	const itemRef = useRef(null);

	const itemHandler = () => {
		setShopItem({ ...shopItem, item: itemRef.current.value });
		console.log(shopItem);
		itemRef.current.value = "";
	};
	const typeToggle = (e) =>
		setShopItem({ ...shopItem, type: e.target.value });

	return (
		<div>
			<input type="text" ref={itemRef} />
			<input
				type="radio"
				id="shop-toggle_html"
				name="fav_language"
				value="food"
				onChange={typeToggle}
			/>
			<label htmlFor="shop-toggle_html">food</label>
			<input
				type="radio"
				id="shop-toggle_css"
				name="fav_language"
				value="other"
				onChange={typeToggle}
			/>
			<label htmlFor="shop-toggle_css"> other </label>
			<button onClick={itemHandler}> add item</button>
			<br />
		</div>
	);
};
