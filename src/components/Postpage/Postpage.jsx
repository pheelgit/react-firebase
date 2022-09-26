import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue, update } from "firebase/database";
import { addTodo } from "api/useFetchingTodos";
import { TodoItem } from "components/Postpage/TodoItem/TodoItem";
import { MyModal } from "components/UI/MyModal/MyModal";
import { PostForm } from "components/Postpage/PostForm/PostForm";

export const Postpage = () => {
	const [todo, setTodo] = useState("");
	const [todoDate, setTodoDate] = useState("");
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

	const handleAddTodo = () => {
		const todoItem = {
			todo,
			todoDate: Date.parse(todoDate),
		};
		console.log(todoItem);
		addTodo(todoItem);
		setTodo("");
		setTodoDate("");
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
			<input
				type="datetime-local"
				value={todoDate}
				onChange={(e) => setTodoDate(e.target.value)}
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
			<br />
			<br />
			<br />
			<button
				onClick={() => {
					console.log(typeof todoDate);
					const date = Date.parse(todoDate);
					console.log(date);
				}}
			>
				testDate
			</button>
		</div>
	);
};
