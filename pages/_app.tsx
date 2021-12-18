import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import {} from "styled-components/cssprop";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
