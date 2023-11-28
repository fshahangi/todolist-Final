import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { useEffect, useState } from "react";

const TodoList = () => {
  const state = useSelector((state) => state.actionSlice);
  const [result, setResult] = useState([]);

  useEffect(() => {
    switch (state.status) {
      case "completed":
        setResult(state.todos.filter((item) => item.completed === true));
        break;

      case "uncompleted": {
        setResult(state.todos.filter((item) => item.completed === false));
        break;
      }

      default:
        setResult(state.todos);
    }
  }, [state]);

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {result.length > 0
            ? result.map((item) => {
                return <Todo title={item.title} key={result.id} todo={item} />;
              })
            : state.todos.map((item) => {
                return (
                  <Todo title={item.title} key={state.todos.id} todo={item} />
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
