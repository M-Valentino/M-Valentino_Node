import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import NavBar from "./navigation/navbar";
import { Footer } from "./footerComponents/footer";
import { MainTheme } from "../../consts/stylingValues";

interface MainWrapperProps {
  children: ReactNode;
  activeLink?: string;
}

/**
 * This component is for decluttering page components. It includes thhe top and bottom portions of the pages also
 * @param {*} activeLink the link to highlight orange in the navbar.
 */
export const MainWrapper: React.FC<MainWrapperProps> = (props) => {
  const { children, activeLink } = props;
  return (
    <ThemeProvider theme={MainTheme}>
      <NavBar activeLink={activeLink} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};
