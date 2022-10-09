import React, { useState, useEffect } from "react";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";
import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { MyModal } from "components/UI/MyModal/MyModal";
import { TodoForm } from "components/Todopage/TodoForm/TodoForm";

import cl from "./Todopage.module.css";
import { MyPopover } from "components/UI/MyModal/MyPopover/MyPopover";

export const TodoPage = () => {
	const [todos, setTodos] = useState([]);
	const [todosCompleted, setTodosCompleted] = useState([]);
	const [todosUncompleted, setTodosUncompleted] = useState([]);
	const [isPopped, setIsPopped] = useState(false);

	const togglePopped = () => {
		setIsPopped(!isPopped);
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

	useEffect(() => {
		setTodosCompleted(todos.filter((e) => e.complete));
		setTodosUncompleted(todos.filter((e) => !e.complete));
	}, [todos]);

	return (
		<div className={cl.todoPage}>
			<div>{todos.length === 0 && <h1>no todos</h1>}</div>
			<div>
				{todosUncompleted.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</div>
			<hr className="h-2 my-2 bg-slate-800" />
			<div>
				{todosCompleted.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</div>
			<br />
			<div className="relative">
				<button
					onClick={togglePopped}
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
					className={cl.popOverBtn}
				>
					{isPopped ? "hide" : "add todo"}
				</button>
				{isPopped && (
					<MyPopover isVisible={togglePopped}>
						{" "}
						<TodoForm isVisible={togglePopped} />
					</MyPopover>
				)}
			</div>
		</div>
	);
};
