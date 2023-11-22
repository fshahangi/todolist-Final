import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./features/counter/CounterSlice";

export const store = configureStore({
  reducer: {
    actionlist: actionReducer,
  },
});
