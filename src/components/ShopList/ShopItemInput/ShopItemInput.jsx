import React, { useState, useRef } from "react";

export const ShopItemInput = () => {
	const defaultShopItem = { item: "", type: "food" };
	const [shopItem, setShopItem] = useState(defaultShopItem);
	const itemRef = useRef(null);

	const itemHandler = () => {
		setShopItem({ ...shopItem, item: itemRef.current.value });
		console.log(shopItem);
		itemRef.current.value = "";
	};
	const typeToggle = (e) =>
		setShopItem({ ...shopItem, type: e.target.value });

	return (
		<div>
			<input type="text" ref={itemRef} />
			<br />
			<br />
			<input
				type="radio"
				id="shop-toggle_html"
				name="fav_language"
				value="food"
				onChange={typeToggle}
			/>
			<label htmlFor="shop-toggle_html">food</label>
			<br />
			<input
				type="radio"
				id="shop-toggle_css"
				name="fav_language"
				value="other"
				onChange={typeToggle}
			/>
			<label htmlFor="shop-toggle_css">other</label>
			<br />
			<button onClick={itemHandler}>add item</button>
			<br />

			<label
				for="default-toggle"
				className="inline-flex relative items-center mb-4 cursor-pointer"
			>
				<input
					type="checkbox"
					value=""
					id="default-toggle"
					className="sr-only peer"
				/>
				<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					Toggle me
				</span>
			</label>

			<div class="flex justify-center">
				<div>
					<div class="form-check form-switch mb-7">
						<input
							class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault56"
						/>
					</div>
					<div class="form-check form-switch">
						<input
							class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckChecked76"
							checked
						/>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-8">
				<label class="inline-flex items-center">
					<input
						type="radio"
						name="vehicle"
						class="h-5 w-5 text-red-600"
					/>
					<span class="ml-2 text-gray-700">Car</span>
				</label>
				<label class="inline-flex items-center">
					<input
						type="radio"
						name="vehicle"
						class="h-5 w-5 text-red-600"
					/>
					<span class="ml-2 text-gray-700">Cycle</span>
				</label>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="max-w-md px-4 mx-auto mt-12"
			>
				<div>
					<label
						for="email"
						className="block py-3 text-gray-500"
					>
						Your Email
					</label>
					<div className="flex items-center p-2 border rounded-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="text-gray-400 w-7 h-7"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<input
							type="email"
							placeholder="name@floatui.com"
							id="email"
							className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
