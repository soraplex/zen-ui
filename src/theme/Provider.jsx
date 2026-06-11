import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./index";

// Provider component to wrap the app and provide the theme
export const CustomProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};