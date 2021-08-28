export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type State = {
  theme: Theme;
  sidebarCollapsed: boolean;
};

export const state: State = {
  theme: Theme.LIGHT,
  sidebarCollapsed: false,
};
