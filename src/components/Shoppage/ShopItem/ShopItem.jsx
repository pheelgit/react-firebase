import React from "react";

import cl from "./ShopItem.module.css";

import { toggleShopComplete } from "api/useFetchingShopList";

export const ShopItem = (props) => {
	const { item, complete } = props;

	return (
		<div className={complete ? cl.itemComplete : cl.item}>
			<span>{item}</span>

			<input
				className={cl.complete}
				type="checkbox"
				onChange={() => toggleShopComplete(props)}
				checked={complete}
			/>
		</div>
	);
};
