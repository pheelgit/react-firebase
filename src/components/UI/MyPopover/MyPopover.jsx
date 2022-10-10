import React from "react";
import cl from "./MyPopover.module.css";

export const MyPopover = ({ visible, setVisible, children }) => {
	return <div className={cl.container}>{children}</div>;
};
