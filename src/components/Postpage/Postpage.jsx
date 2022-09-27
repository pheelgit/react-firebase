import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";
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

	return (
		<div>
			{isEditTodo ? (
				<MyModal isVisible={setIsEditTodo}>
					<PostForm isVisible={setIsEditTodo} />
				</MyModal>
			) : null}

			<div>
				{todos.length === 0 ? (
					<h1>no todos</h1>
				) : (
					todos.map((todo) =>
						todo.complete ? null : (
							<TodoItem
								key={todo.uuid}
								todo={todo}
							/>
						)
					)
				)}
			</div>
			<hr className="h-2 my-2 bg-slate-800" />
			<div>
				{todos.length === 0 ? (
					<h1>no todos</h1>
				) : (
					todos.map((todo) =>
						todo.complete ? (
							<TodoItem
								key={todo.uuid}
								todo={todo}
							/>
						) : null
					)
				)}
			</div>

			<button onClick={() => setIsEditTodo((prev) => !prev)}>
				newAddTODO
			</button>
		</div>
	);
};
