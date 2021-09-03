import { createSlice } from "@reduxjs/toolkit";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface UiState {
  theme: Theme;
  sidebarCollapsed: boolean;
}

const initialState: UiState = {
  theme: Theme.LIGHT,
  sidebarCollapsed: false,
};

////////
// Slice
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleTheme: (state: UiState) => {
      state.theme = state.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      console.log("TEST");
    },
    collapseSidebar: (state: UiState) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

//////////
// Actions
export const { toggleTheme, collapseSidebar } = uiSlice.actions;

export default uiSlice.reducer;
