import { createSlice, current } from "@reduxjs/toolkit";

const INISTIAL_STATE = {
  inputText: "",
  todos: [],
  status: "all",
  filteredTodos: [],
};

const actionSlice = createSlice({
  name: "actionSlice",
  initialState: INISTIAL_STATE,
  reducers: {
    addToList: (state, action) => {
      state.todos.push(action.payload);
    },
    editToList: (state, action) => {
      current(state.todos).map((item) => {
        if (item.id === action.payload.id) item.title = action.payload.title;
      });
    },
    deleteItem: (state, action) => {
      state.todos = current(state.todos).filter(
        (item) => item.id !== action.payload.id
      );
    },
    changeStatus: (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[index].completed = !action.payload.completed;
    },
    filterToList: (state, action) => {
      state.status = action.payload.status;
    },
  },
});
export const { addToList, editToList, deleteItem, changeStatus, filterToList } =
  actionSlice.actions;
export default actionSlice.reducer;
