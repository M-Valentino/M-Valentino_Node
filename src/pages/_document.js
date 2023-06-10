import { Html, Head, Main, NextScript } from "next/document";

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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
