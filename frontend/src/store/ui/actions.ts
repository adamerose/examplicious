import { Overmind } from "overmind";
import { Context } from "..";
import { Theme } from "./state";

export const toggleTheme = ({ state, effects }: Context) => {
  state.ui.theme = state.ui.theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};

export const collapseSidebar = ({ state, effects }: Context) => {
  state.ui.sidebarCollapsed = !state.ui.sidebarCollapsed;
};
