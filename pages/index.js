import Head from "next/head";
import fetcher from "../../../headless-wordpress/lib/fetcher";
import parse from "html-react-parser";
import getMeta from "../lib/getMeta";
import { GET_MAIN_MENU } from "../lib/wordpress/menu";
import { GET_PAGE_DATA } from "../lib/wordpress/page";
import { MainMenu } from "../components/wordpress/mainMenu";
import { getPageSlug } from "../lib/getPageSlug";

export default function Home({ mainMenu, meta, page, pageSlug }) {
	// Parse sting data to HTML
	const metaData = parse(meta);

	console.log("slug strony w WP zaciągniety z jsona: ", pageSlug);
	return (
		<div>
			<Head>{metaData}</Head>

			<MainMenu menu={mainMenu} />

			<main>
				<h1>{page.title}</h1>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	// Get translated page slug based on page DATABASE ID (EN)
	let pageSlug = getPageSlug(3935, context.locale)
	
	let menuID;
	let language = context.locale;
	language == "pl" ? (menuID = "119") : (menuID = "159");
	// const nameOfPage =
	const variables = {
		// For mainMenu
		menuID: menuID,
		pageName: language == "pl" ? "strona-glowna" : "home-page",
	};
	const mainMenuResponse = await fetcher(GET_MAIN_MENU, { variables });
	const mainMenu = mainMenuResponse.menu;
	const metaResponse = await getMeta("home-page");
	const meta = metaResponse ? metaResponse : "RankMath response empty";
	const pageDataResponse = await fetcher(GET_PAGE_DATA, { variables });
	const page = pageDataResponse.page;
	return { props: { mainMenu, meta, page, pageSlug } };
}
