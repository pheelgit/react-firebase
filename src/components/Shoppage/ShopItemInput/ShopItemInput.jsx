import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addShopItem } from "api/useFetchingShopList";

import cl from "./ShopInput.module.css";

export const ShopItemInput = () => {
	const [shopItem, setShopItem] = useState({ item: "", type: "" });
	const { "*": shopItemType } = useParams();
	const [isPopped, setIsPopped] = useState(false);

	const togglePopped = () => {
		setIsPopped(!isPopped);
	};

	useEffect(() => {
		setShopItem({ ...shopItem, type: shopItemType });
	}, [shopItemType]);

	const itemSubmit = () => {
		if (!shopItem.item.trim()) {
			return;
		}
		addShopItem(shopItem);
		togglePopped();
		setShopItem({
			...shopItem,
			item: "",
		});
	};

	return (
		<div className="relative">
			<div className={isPopped ? cl.popOverContent : cl.hide}>
				<input
					className={cl.input}
					type="text"
					value={shopItem.item}
					onChange={(e) =>
						setShopItem({
							...shopItem,
							item: e.target.value,
						})
					}
				/>
				<br />
				<button onClick={itemSubmit}>add</button>
				<br />
			</div>
			<button onClick={togglePopped}>
				{" "}
				{isPopped ? "hide" : "add"}
			</button>
		</div>
	);
};
