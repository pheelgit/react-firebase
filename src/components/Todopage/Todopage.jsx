import React, { useState, useEffect } from "react";
import { useFilter } from "hooks/useFilter";
import { db } from "firebase.js";
import { ref, onValue } from "firebase/database";

import { TodoItem } from "components/Todopage/TodoItem/TodoItem";
import { TodoForm } from "components/Todopage/TodoForm/TodoForm";
import { MyPopover } from "components/UI/MyPopover/MyPopover";

import cl from "./Todopage.module.css";

export const TodoPage = () => {
	const [todos, setTodos] = useState([]);
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

	const completed = useFilter(todos, ["complete", true]);

	const unCompleted = useFilter(todos, ["complete", false]);

	return (
		<div className={cl.todoPage}>
			{todos.length === 0 ? <h1>no todos</h1> : null}
			<div>
				{unCompleted.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</div>
			<hr className="h-2 my-2 bg-rose-500" />
			<div>
				{completed.map((todo) => (
					<TodoItem key={todo.uuid} todo={todo} />
				))}
			</div>
			<br />
			<div className="relative">
				<button
					onClick={togglePopped}
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
					className={
						isPopped
							? cl.popOverBtn +
							  " " +
							  cl.popOverBtnPopped
							: cl.popOverBtn
					}
				>
					{isPopped ? "hide" : "add todo"}
				</button>

				{isPopped ? (
					<MyPopover isVisible={togglePopped}>
						<TodoForm isVisible={togglePopped} />
					</MyPopover>
				) : null}
			</div>
		</div>
	);
};
