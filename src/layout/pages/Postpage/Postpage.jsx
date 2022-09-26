import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue, update } from "firebase/database";
import { toggleTodo, addTodo } from "api/useFetchingTodos";
import { TodoItem } from "components/TodoItem/TodoItem";
import { MyModal } from "components/UI/MyModal/MyModal";
import { PostForm } from "components/PostForm/PostForm";

export const Postpage = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState("");
	const [isEditTodo, setIsEditTodo] = useState(false);

	const handleCloseModal = () => {
		setIsEditTodo(false);
	};
	//connecting to db
	useEffect(() => {
		onValue(ref(db, "todos"), (snapshot) => {
			const data = snapshot.val();
			data === null
				? setTodos([])
				: setTodos(Object.values(data));
		});
	}, []);

	const handleAddTodo = () => {
		addTodo(todo);
		setTodo("");
	};

	return (
		<div>
			{isEditTodo ? (
				<MyModal isVisible={setIsEditTodo}>
					<PostForm />
				</MyModal>
			) : null}

			<input
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				type="text"
			/>

			<button onClick={handleAddTodo}>submit post</button>

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
		</div>
	);
};
