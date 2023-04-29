import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const MainTheme = createTheme({
  palette: {
    primary: orange,
  },
});

export default function Document() {


  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={MainTheme}>
          <NavBar />
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
