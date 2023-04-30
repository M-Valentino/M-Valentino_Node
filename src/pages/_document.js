import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Fade from "@mui/material/Fade";

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
        <Fade in={true}>
          <ThemeProvider theme={MainTheme}>
            <NavBar />
            <Main />
            <NextScript />
          </ThemeProvider>
          </Fade>
        </body>
      
    </Html>
  );
}
