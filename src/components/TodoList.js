import { useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";

const TodoList = () => {
  const state = useSelector((state) => state.actionSlice);
  let result = [];

  const switchfunc = () => {
    switch (state.status) {
      case "completed":
        result = state.todos.filter((item) => item.completed === true);
        return result;

      case "uncompleted": {
        result = state.todos.filter((item) => item.completed === false);
        return result;
      }

      default:
        return state.todos;
    }
  };
  useEffect(() => {
    result = switchfunc();
  }, [state.status]);

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {
            //result.length<=0 && result=state.todos ;

            result.length > 0
              ? result.map((item) => {
                  console.log(result);
                  return (
                    <Todo title={item.title} key={result.id} todo={item} />
                  );
                })
              : state.todos.map((item) => {
                  console.log(state.todos);
                  return (
                    <Todo title={item.title} key={state.todos.id} todo={item} />
                  );
                })
          }
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
