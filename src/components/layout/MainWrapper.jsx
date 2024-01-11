import React from "react";
import { ThemeProvider } from "@mui/material";
import NavBar from "./navigation/navbar";
import { Footer } from "./footerComponents/footer";
import { MainTheme } from "../../consts/stylingValues";
/**
 * This component is for decluttering page components. It includes thhe top and bottom portions of the pages also
 * @param {*} activeLink the link to highlight orange in the navbar.
 */
export const MainWrapper = ({ children, activeLink }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <NavBar activeLink={activeLink} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
