import Layout from "components/shared/Layout";
import Navbar from "components/shared/Navbar";
import { UpdateProvider } from "hooks/useUpdate";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID as string}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL as string}
    >
      <UpdateProvider>
        <div className="bg-black bg-opacity-75 text-white min-h-screen relative">
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer theme="dark" className={"font-sans top-20"} />
        </div>
      </UpdateProvider>
    </MoralisProvider>
  );
}

export default MyApp;
