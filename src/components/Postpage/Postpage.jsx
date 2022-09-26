import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue, update } from "firebase/database";
import { addTodo, sendTg } from "api/useFetchingTodos";
import { TodoItem } from "components/Postpage/TodoItem/TodoItem";
import { MyModal } from "components/UI/MyModal/MyModal";
import { PostForm } from "components/Postpage/PostForm/PostForm";

export const Postpage = () => {
	const [todos, setTodos] = useState("");
	const [isEditTodo, setIsEditTodo] = useState(false);

	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			data === null
				? setTodos([])
				: setTodos(Object.values(data));
		});
	}, []);

	useEffect(() => {
		const dateNow = Date.parse(new Date());
		const mapTodos = [...todos].forEach((todo1) => {
			if (todo1.todoDate < dateNow) {
				console.log(todo1);
				console.log(new Date(todo1.todoDate));
			}
		});

		console.log(mapTodos);
	}, [todos]);

	return (
		<div>
			{isEditTodo ? (
				<MyModal isVisible={setIsEditTodo}>
					<PostForm isVisible={setIsEditTodo} />
				</MyModal>
			) : null}

			<br />
			<div>
				{todos.length === 0 ? (
					<h1>no todos</h1>
				) : (
					todos.map((todo) => (
						<TodoItem key={todo.uuid} todo={todo} />
					))
				)}
			</div>

			<button onClick={() => setIsEditTodo((prev) => !prev)}>
				newAddTODO
			</button>
			<br />
			<br />
			<br />
		</div>
	);
};
