import { useEffect, useState } from "react";

export const useFilter = (items, [filter, value]) => {
	const [filteredItems, setFilteredItems] = useState(items);
	useEffect(() => {
		setFilteredItems([...items].filter((e) => e[filter] === value));
	}, [items]);

	return filteredItems;
};
