import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Link href={"/search"}>home</Link>
        <Component {...pageProps} />
      </header>
    </>
  );
}
