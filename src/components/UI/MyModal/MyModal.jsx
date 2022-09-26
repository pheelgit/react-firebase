import React from "react";
import cl from "./MyModal.module.css";

export const MyModal = ({ children, isVisible }) => {
	return (
		<div className={cl.container} onClick={() => isVisible(false)}>
			<div
				className={cl.content}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};
