import { withTranslateRoutes } from "next-translate-routes";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default withTranslateRoutes(MyApp);
