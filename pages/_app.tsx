import Head from "next/head";
import Layout from "@/components/layout/layout";

import type { AppProps } from "next/app";

import "@/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>site to search events</title>
        <meta name="description" content="Events near you" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
