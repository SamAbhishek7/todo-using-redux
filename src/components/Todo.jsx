import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
import "../app/styles/1.css"; // Assuming you have a CSS file for styling

export default function Todo() {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const clickhandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markhandler = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h3>Todo</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.isDone ? "done" : ""}
            >
              {todo.task}
              <button onClick={() => clickhandler(todo.id)}>Delete</button>
              <button onClick={() => markhandler(todo.id)}>Done</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}