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

//add todo
export const addTodo = ({ todo, todoDate }) => {
	if (!todo.trim()) return;
	const uuid = uid();
	set(ref(db, `todos/${uuid}`), {
		todo,
		todoDate,
		uuid,
		complete: false,
	});
};

//toggle todo
export const toggleTodo = (todo) => {
	update(ref(db, `todos/${todo.uuid}`), {
		complete: !todo.complete,
	});
};

//delete todo
export const deleteTodo = (todo) => {
	remove(ref(db, `/todos/${todo.uuid}`));
};

//send message to telegram

export const sendTg = (text) => {
	axios.get(
		"https://api.telegram.org/bot5400584821:AAGSdMVcRYEGayAzVeU-Eixwz5BfbltJit0/sendMessage",
		{
			params: { chat_id: 421832931, text },
		}
	);
};
