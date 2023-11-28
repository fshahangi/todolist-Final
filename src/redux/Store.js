import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "./features/counter/TodolistSlice";

export default configureStore({
  reducer: {
    actionSlice: TodolistSlice,
  },
});
