import Head from "next/head";
import fetcher from "../../../headless-wordpress/lib/fetcher";
import parse from "html-react-parser";
import getMeta from "../lib/getMeta";
import { GET_MAIN_MENU } from "../lib/wordpress/menu";
import { MainMenu } from "../components/wordpress/mainMenu";
import { useRouter } from "next/router";

export default function Home({ mainMenu, meta }) {
	const metaData = parse(meta);
	return (
		<div>
			<Head>{metaData}</Head>

			<MainMenu menu={mainMenu} />

			<MainMenu menu={mainMenu} />

			<main></main>
		</div>
	);
}

export async function getStaticProps(context) {
	let menuID;
	let language = context.locale;
	language == "pl" ? (menuID = "119") : (menuID = "159");
	const variables = {
		// For mainMenu
		menuID: menuID,
	};
	const mainMenuResponse = await fetcher(GET_MAIN_MENU, { variables });
	const mainMenu = mainMenuResponse.menu;
	const metaResponse = await getMeta("home-page");
	const meta = metaResponse ? metaResponse : "RankMath response empty";
	return { props: { mainMenu, meta } };
}
