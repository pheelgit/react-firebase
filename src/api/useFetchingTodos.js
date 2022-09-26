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

//add todo
export const addTodo = (todo) => {
	const uuid = uid();
	set(ref(db, `todos/${uuid}`), {
		todo,
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
