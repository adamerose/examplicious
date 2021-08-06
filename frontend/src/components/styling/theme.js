const baseTheme = {
  headerHeight: "64px",
  borderRadius: "8px",
};

export const lightTheme = {
  ...baseTheme,
  isDark: false,
  background: "#FFFFFF",
  backgroundSecondary: "#F1F3F4",
  primaryColor: "#FEEFC3",
  text: "#121620",
  border: "#E0E0E0",
};

export const darkTheme = {
  ...baseTheme,
  isDark: true,
  background: "#202124",
  backgroundSecondary: "#28292C",
  primaryColor: "#41331c",
  text: "#f1f1f1",
  border: "#5F6368",
};
