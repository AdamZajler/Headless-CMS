import Head from "next/head";
import fetcher from "../../../../headless-wordpress/lib/fetcher";
import getMeta from "../../lib/getMeta";
import parse from "html-react-parser";
import { GET_MAIN_MENU } from "../../lib/wordpress/menu";
import { MainMenu } from "../../components/wordpress/mainMenu";
import { useRouter } from "next/router";

export default function AboutUs({ mainMenu, meta }) {
	const router = useRouter();
	// Get meta data from RankMath
	const metaData = parse(meta);
	return (
		<div>
			<Head>{metaData}</Head>

			<MainMenu menu={mainMenu} />

			<main>
				<h1>{router.locale == "pl" ? "POLSKA" : "ENGGG"}</h1>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	let menuID;
	let language = context.locale;
	language == "pl" ? (menuID = "119") : (menuID = "159");
	const variables = {
		// For head
		pageID: "3929",
		pageLang: language.toUpperCase(),
		// For mainMenu
		menuID: menuID,
	};
	const mainMenuResponse = await fetcher(GET_MAIN_MENU, { variables });
	const mainMenu = mainMenuResponse.menu;
	const metaResponse = await getMeta("about-us");
	const meta = metaResponse ? metaResponse : "RankMath response empty";
	return { props: { mainMenu, meta } };
}
