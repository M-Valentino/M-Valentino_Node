import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";



export default function Document() {


  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0, backgroundColor: '#eaf0f6' }}>
        <ThemeProvider theme={MainTheme}>
          <NavBar/>
          <div style={{padding: 20}}>
            <Main/>
            <NextScript/>
          </div>
        </ThemeProvider>
      </body>
    </Html>
  );
}
