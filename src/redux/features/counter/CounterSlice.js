import { createSlice } from "@reduxjs/toolkit";

const INISTIAL_STATE = { title: "" };

const actionSlice = createSlice({
  name: "actionSlice",
  initialState: INISTIAL_STATE,
  reducers: {
    updatelist: (state, action) => {
      state.title = "";
    },
  },
});
export const { updatelist } = actionSlice.actions;
export default actionSlice.reducer;
