import React from "react";
import { useParams } from "react-router-dom";

export const TestPage = (props) => {
	const { "*": itemType } = useParams();
	console.log(itemType);

	return <>{itemType}</>;
};
