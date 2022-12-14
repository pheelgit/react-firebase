import React from "react";
import { useRoutes } from "react-router-dom";

import { ShopFood } from "./ShopFood/ShopFood";
import { ShopOther } from "./ShopOther/ShopOther";

export const ShoppageRouter = () => {
	const ShoppageRouter = useRoutes([
		{ path: "food", element: <ShopFood /> },
		{ path: "other", element: <ShopOther /> },
	]);
	return ShoppageRouter;
};
