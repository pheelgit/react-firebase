import React from "react";

import { toggleShopComplete } from "api/useFetchingShopList";

export const ShopItem = (props) => {
	const { item, complete } = props;

	return (
		<div>
			<span>{item}</span>

			<input
				type="checkbox"
				onChange={() => toggleShopComplete(props)}
				checked={complete}
			/>
		</div>
	);
};
