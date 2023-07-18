import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      style={{
        backgroundColor: "rgb(236,233,235)",
        backgroundImage:
          "linear-gradient(0deg, rgba(235,236,233,1) 0%, rgba(236,233,235,1) 100%)",
      }}
    >
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
