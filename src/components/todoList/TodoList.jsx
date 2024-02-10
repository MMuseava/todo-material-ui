import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todoList.style.css";
import { IconButton } from "@mui/material";

const TodoList = () => {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const onChangeHandler = (e) => {
		setTodo(e.target.value);
	};

	const addTodo = () => {
		if (todo !== "") {
			setTodoList([...todoList, { text: todo }]);
			setTodo("");
		}
	};

	const toggleTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList[index].completed = !newTodoList[index].completed;
		setTodoList(newTodoList);
	};

	const deleteTodo = (index) => {
		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	return (
		<div className="todo-list-container">
			<div className="todo-list-box">
				<Typography
					variant="h3"
					className="todo-list-heading"
					sx={{ color: " dark green", fontFamily: "Georgia, serif" }}
				>
					Todo List
				</Typography>
				<div className="input-box">
					<TextField
						fullWidth
						color="success"
						focused
						id="inputBx"
						label="What is the task today"
						variant="filled"
						value={todo}
						onChange={onChangeHandler}
						sx={{ fontFamily: "Georgia, serif" }}
					/>
					<IconButton onClick={addTodo} variant="contained" color="success">
						<PlaylistAddIcon />
					</IconButton>
				</div>
				<List>
					{todoList.map((item, index) => (
						<ListItem
							key={index}
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<FormControlLabel
								control={
									<Checkbox
										checked={item.completed}
										onChange={() => toggleTodo(index)}
										color="success"
									/>
								}
								label={
									<ListItemText
										primary={item.text}
										sx={{
											textDecoration: item.completed ? "line-through" : "none",
											color: item.completed ? red[500] : "inherit",
										}}
									/>
								}
							/>
							<IconButton onClick={() => deleteTodo(index)} color="success">
								<DeleteIcon />
							</IconButton>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	);
};

export default TodoList;
