import Head from "next/head";
import fetcher from "../lib/fetcher";
import parse from "html-react-parser";
import getMeta from "../lib/getMeta";
import { GET_SINGLE_MENU } from "../lib/wordpress/menu";
import { GET_PAGE_DATA } from "../lib/wordpress/page";
import { GET_THEME_SETTINGS } from "../lib/wordpress/head";
import { MainMenu } from "../components/wordpress/mainMenu/mainMenu";
import { getPageSlug } from "../lib/getPageSlug";
import { getMenu } from "../lib/getMenu";
import { getThemeSetting } from "../lib/getThemeSetting";
import { Container } from "../components/structure/container";
import { ContainerFull } from "../components/structure/ContainerFull";
import { HomePageSlider } from "../components/look/HomePageSlider";

export default function Home({ meta, page, menus, themeSettings }) {
	// data from themeSetting (customizer)
	const themeMeta = getThemeSetting(themeSettings, "ThemeSettings_Meta");
	console.log(themeMeta.windowsMetroColor);
	console.log(themeMeta.safariThemeColor);

	// Filter for primary menu
	const mainMenu = menus.filter((single) => {
		if (single.type == "primary") {
			return single.menu;
		}
	})[0].menu.menus.edges[0].node;

	// Parse string meta data to HTML
	const metaData = parse(meta);

	return (
		<div>
			<Head>
				{metaData}
				<meta name="msapplication-TileColor" content={themeMeta.windowsMetroColor}></meta>
				<meta name="theme-color" content={themeMeta.safariThemeColor}></meta>
				<link rel="apple-touch-icon" sizes="180x180" href={themeMeta.appleTouch}></link>
				<link rel="icon" type="image/png" sizes="48x48" href={themeMeta.favicon48x48}></link>
				<link rel="icon" type="image/png" sizes="32x32" href={themeMeta.favicon32x32}></link>
				<link rel="icon" type="image/png" sizes="16x16" href={themeMeta.favicon16x16}></link>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>

			<MainMenu
				customClasses="absolute w-full z-10 bg-red-900 opacity-50"
				mainMenu={mainMenu}
				themeSettings={themeSettings}
			/>

			<HomePageSlider></HomePageSlider>

			<Container>
				<h2 className="text-white">COŚ</h2>
			</Container>
			<main>
				<ContainerFull>
					<h1 className="font-bold text-primary">{page.title}</h1>
				</ContainerFull>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	// Get translated page slug based on page DATABASE ID (EN)
	let pageSlug = getPageSlug(3935, context.locale);

	const variables = {
		// For pageDataResponse
		pageName: pageSlug,
	};

	// Get all menus from specific language
	let menus = getMenu(context.locale, ["primary"]);
	let menusResponse = [];
	for (let single of menus) {
		let variables = {
			singleMenuLang: single.id,
		};
		let singleMenu = await fetcher(GET_SINGLE_MENU, { variables });
		menusResponse.push({ type: single.type, id: single.id, menu: singleMenu });
	}
	menus = menusResponse;

	const metaResponse = await getMeta(pageSlug);
	const meta = metaResponse ? metaResponse : "RankMath response empty";
	const themeSettingsResponse = await fetcher(GET_THEME_SETTINGS);
	const themeSettings = themeSettingsResponse.themeSettings;
	const pageDataResponse = await fetcher(GET_PAGE_DATA, { variables });
	const page = pageDataResponse.page;
	return { props: { meta, page, menus, themeSettings } };
}
