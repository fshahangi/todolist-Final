import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { store } from "./redux/Store";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Provider store={store}>
        <Form />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
