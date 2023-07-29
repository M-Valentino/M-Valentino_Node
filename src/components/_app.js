import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    clarity.init("i6z07kdmzf");
  });
  return <Component {...pageProps} />;
}
