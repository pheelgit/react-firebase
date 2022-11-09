import React, { useEffect } from "react";
import { useDataBaseMoney } from "api/useMoney";

export const TestPage = (props) => {
	const { money } = useDataBaseMoney(2022);

	return <>{JSON.stringify(money.slice(13, 17), null, `\n`)}</>;
};
