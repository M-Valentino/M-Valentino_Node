import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "@/utils/MUITheme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          margin: 0,
          imageRendering: "high-quality",
          background:
            "radial-gradient(circle, rgb(246,249,251) 0%, rgb(234,240,246) 100%",
        }}
      >
        <ThemeProvider theme={MainTheme}>
          <NavBar />
          <div style={{ padding: 20 }}>
            <Main />
            <NextScript />
          </div>
        </ThemeProvider>
      </body>
    </Html>
  );
}
