import { db } from "firebase.js";
import { uid } from "uid";
import {
	set,
	ref,
	onValue,
	remove,
	update,
	get,
	child,
	push,
} from "firebase/database";
import axios from "axios";

//add  shopItem
export const addShopItem = ({ item, type }) => {
	const uuid = uid();
	set(ref(db, `shoplist/${type}/${uuid}`), {
		item,
		type,
		uuid,
	});
};
