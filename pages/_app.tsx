import "styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "components/shared/Navbar";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID as string}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL as string}
    >
      <div className="bg-black bg-opacity-75 text-white min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </MoralisProvider>
  );
}

export default MyApp;
