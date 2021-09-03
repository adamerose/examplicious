import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import notesReducer from "./slices/notesSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
