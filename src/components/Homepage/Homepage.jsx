import React from "react";
import cl from "./Homepage.module.css";
import "./style.css";

export const Homepage = () => {
	return (
		<div className={cl.homePage}>
			<h2>homePage</h2>

			<input
				type="date"
				value=""
				class="input-txt"
				id="date"
				aria-required="true"
				aria-invalid="false"
				placeholder="Enter the needed date"
				onchange="this.className=(this.value!=''?'has-value':'')"
			/>

			<form class="pa__top-sec">
				<div class="pa__top-title btn-sec">
					Search by date
				</div>
				<div class="pa__middle-range">
					<div class="pa__middle-item">
						<input
							class="pa__middle-input text"
							type="date"
							name="date"
							placeholder="From"
							onchange="this.className=(this.value!=''?'has-value':'')"
							required
						/>
					</div>
					<div class="pa__middle-item">
						{" "}
						<input
							class="pa__middle-input text"
							type="date"
							name="date"
							placeholder="To"
							onchange="this.className=(this.value!=''?'has-value':'')"
							required
						/>
					</div>
					<div class="pa__middle-btn">
						{" "}
						<button
							class="btn btn-accent"
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
