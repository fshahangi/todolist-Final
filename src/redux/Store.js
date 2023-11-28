import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "./features/todolist/TodolistSlice";

export default configureStore({
  reducer: {
    actionSlice: TodolistSlice,
  },
});
