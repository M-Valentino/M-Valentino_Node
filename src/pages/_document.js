import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: "rgb(240,243,245)" }}>
      <Head />
      <body
        style={{
          margin: 0,
          height: "100%",
          imageRendering: "high-quality",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
