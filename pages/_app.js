import { withTranslateRoutes } from "next-translate-routes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default withTranslateRoutes(MyApp);
