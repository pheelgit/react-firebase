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
import { useEffect, useState } from "react";
import { useFilter } from "hooks/useFilter";

export const useDataBase = () => {
	const [todos, setTodos] = useState([]);

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			data === null
				? setTodos([])
				: setTodos(Object.values(data));
		});
	}, []);

	const completed = useFilter(todos, ["complete", true]);
	const unCompleted = useFilter(todos, ["complete", false]);

	return { todos, completed, unCompleted };
};

//add todo
export const addTodo = ({ todo, todoDate, expired }) => {
	const uuid = uid();
	set(ref(db, `todos/${uuid}`), {
		todo,
		todoDate,
		uuid,
		todoDate: todoDate ? Date.parse(todoDate) : null,
		complete: false,
		expired,
	});
};

//update todo
export const updateTodo = (todo) => {
	update(ref(db, `todos/${todo.uuid}`), {
		todo: todo.todo,
	});
};

//toggle todo complete
export const toggleTodoComplete = (todo) => {
	update(ref(db, `todos/${todo.uuid}`), {
		complete: !todo.complete,
	});
};

//toggle todo expired
export const toggleTodoExpired = (todo) => {
	update(ref(db, `todos/${todo.uuid}`), {
		expired: !todo.expired,
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
