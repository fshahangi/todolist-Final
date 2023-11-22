import React, { useContext, useState } from "react";
import { stateContext } from "../context/TodoContext";
import { useSelector } from "react-redux";

const Todo = (props) => {
  const [state, setState] = useContext(stateContext);

  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [name, setName] = useState(props.todo.title);
  //const actionList = useSelector((state) => state.actionlist);

  const editHandler = () => {
    setToggleUpdate(!toggleUpdate);

    setState((preVal) => ({
      ...preVal,
      todos: state.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            title: name,
          };
        }
        return item;
      }),
    }));
  };

  const deletehandler = () => {
    setState((preVal) => ({
      ...preVal,
      todos: state.todos.filter((item) => item.id !== props.todo.id),
    }));
  };

  const completeHandler = () => {
    setState((preVal) => ({
      ...preVal,
      todos: state.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    }));
  };

  return (
    <div className="todo">
      {toggleUpdate && !props.todo.completed ? (
        <li>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={props.title}
            type="text"
            className="updateinput"
          />
        </li>
      ) : (
        <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
          {props.title}
        </li>
      )}

      <button
        className={
          toggleUpdate && !props.todo.completed ? "update-btn" : "edit-btn"
        }
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
