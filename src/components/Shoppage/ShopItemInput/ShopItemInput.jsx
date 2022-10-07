import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { addShopItem } from "api/useFetchingShopList";

export const ShopItemInput = () => {
	const [shopItem, setShopItem] = useState({ item: "", type: "" });
	const { "*": shopItemType } = useParams();

	useEffect(() => {
		setShopItem({ ...shopItem, type: shopItemType });
	}, [shopItemType]);

	const itemSubmit = () => {
		addShopItem(shopItem);

		setShopItem({
			...shopItem,
			item: "",
		});
	};

	return (
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
			<button onClick={itemSubmit}> add item</button>
			<br />
		</div>
	);
};
