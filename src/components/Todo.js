import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import {
  editToList,
  changeStatus,
  deleteItem,
} from "../redux/features/counter/TodolistSlice";

const Todo = (props) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const { todos } = useSelector((state) => state.actionSlice);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const editHandler = () => {
    setToggleUpdate(!toggleUpdate);
    dispatch(editToList({ id: props.key, title: inputRef.current.value }));
  };

  const deletehandler = () => {
    dispatch(deleteItem({ id: props.todo.id }));
  };

  const completeHandler = () => {
    dispatch(
      changeStatus({ id: props.todo.id, completed: props.todo.completed })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {!todos.completed && (
          <input
            ref={inputRef}
            placeholder={props.title}
            type="text"
            className="updateinput"
            disabled={!toggleUpdate}
          />
        )}
      </li>

      <button
        className={toggleUpdate && !todos.completed ? "update-btn" : "edit-btn"}
        onClick={editHandler}
      >
        <i className="fas fa-edit"></i>
      </button>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deletehandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
