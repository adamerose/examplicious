const baseTheme = {
  borderRadius: "8px",
  animationDuration: "250ms",
  font: "Roboto, Tahoma, Helvetica, Arial, sans-serif",
  // https://lukebrown.dev/writing/how-to-create-a-spacing-system-with-styled-components
  spacing: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "48px",
    7: "64px",
    8: "96px",
    9: "128px",
  },
  shadow: {
    1: "0 16px 10px 0 rgb(0 0 0 / 14%), 0 11px 18px 0 rgb(0 0 0 / 12%), 0 13px 5px -1px rgb(0 0 0 / 20%)",
  },
  // Layout
  headerHeight: "64px",
  sidebarWidth: "280px",
  sidebarWidthCollapsed: "80px",
};

export const lightTheme = {
  ...baseTheme,
  isDark: false,
  background: "#FFFFFF",
  backgroundSecondary: "#F1F3F4",
  primaryColor: "#FEEFC3",
  text: "#2D2D2D",
  textSecondary: "#5f6368",
  border: "#DADCE0",
};

export const darkTheme = {
  ...baseTheme,
  isDark: true,
  background: "#202124",
  backgroundSecondary: "#28292C",
  primaryColor: "#41331c",
  text: "#f1f1f1",
  textSecondary: "#f1f1f1",
  border: "#5F6368",
};
