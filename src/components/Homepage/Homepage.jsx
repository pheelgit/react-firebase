import React from "react";
import cl from "./Homepage.module.css";
import "./style.css";

export const Homepage = () => {
	return (
		<div className={cl.homePage}>
			<h2>homePage</h2>

			<input
				type="date"
				// value=""
				className="input-txt"
				id="date"
				aria-required="true"
				aria-invalid="false"
				placeholder="Enter the needed date"
				// onChange="this.className=(this.value!=''?'has-value':'')"
			/>

			<form className="pa__top-sec">
				<div className="pa__top-title btn-sec">
					Search by date
				</div>
				<div className="pa__middle-range">
					<div className="pa__middle-item">
						<input
							className="pa__middle-input text"
							type="date"
							name="date"
							placeholder="From"
							// onChange="this.className=(this.value!=''?'has-value':'')"
							required
						/>
					</div>
					<div className="pa__middle-item">
						{" "}
						<input
							className="pa__middle-input text"
							type="date"
							name="date"
							placeholder="To"
							// onChange="this.className=(this.value!=''?'has-value':'')"
							required
						/>
					</div>
					<div className="pa__middle-btn">
						{" "}
						<button
							className="btn btn-accent"
							type="reset"
						>
							Reset
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
