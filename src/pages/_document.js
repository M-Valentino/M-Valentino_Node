import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ overscrollBehaviorY: "none" }}>
      <Head />
      <body
        style={{
          margin: 0,
          imageRendering: "high-quality",
          background:
            "radial-gradient(circle, rgb(240,243,245) 0%, rgb(231,237,243) 100%",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
