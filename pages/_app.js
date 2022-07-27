import Head from "next/head";
import "../assets/css/styles.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<link rel="shortcut icon" href="/gladstone-favicon-v3.png" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
