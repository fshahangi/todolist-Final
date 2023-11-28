import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import React from "react";
import {
  addToList,
  filterToList,
} from "../redux/features/counter/TodolistSlice";

const Form = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const submitTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      addToList({
        title: inputRef.current.value,
        completed: false,
        id: Math.random() * 1000,
      })
    );
    inputRef.current.value = "";
  };
  const statusHandler = (e) => {
    dispatch(
      filterToList({
        status: e.target.value,
      })
    );

    //setState((preVal) => ({ ...preVal, status: e.target.value }));
  };
  return (
    <div>
      <form>
        <input
          ref={inputRef}
          value={state.inputText}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
