import { withTranslateRoutes } from "next-translate-routes";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress height={4} color={"#0C6DAA"} />
			<Component {...pageProps} />;
		</>
	);
}

export default withTranslateRoutes(MyApp);
