import React from "react";
import { useDataBaseMoney } from "api/useMoney";

export const TestPage = (props) => {
	const { money } = useDataBaseMoney(2021);
	return <>{JSON.stringify(money[15], null, `\n`)}</>;
};
