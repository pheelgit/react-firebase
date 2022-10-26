import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addShopItem } from "api/useFetchingShopList";

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
			<div>
				<input
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
