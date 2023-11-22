import React, { useContext } from "react";
import Todo from "./Todo";
import { stateContext } from "../context/TodoContext";

const TodoList = () => {
  const [state, setState] = useContext(stateContext);
  // console.log(state.filteredTodos);

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {state.filteredTodos.map((item) => {
            return <Todo title={item.title} key={state.todos.id} todo={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
