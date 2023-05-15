import React from "react";
import { ThemeProvider } from "./themeContext";
import { BrowserRouter } from "react-router-dom";


export type Props = {
  children: React.ReactNode;
};


export const AppProviders = ({ children }:Props) => {
    return (
        <ThemeProvider>
          <BrowserRouter>
            { children }
          </BrowserRouter>
        </ThemeProvider>
    )
}