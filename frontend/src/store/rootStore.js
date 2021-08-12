import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import notesReducer from "./notesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
});

export const selectRootStore = (state) => state;

export default store;
