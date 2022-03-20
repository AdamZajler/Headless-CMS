import Head from "next/head";
import fetcher from "../../lib/fetcher";
import parse from "html-react-parser";
import getMeta from "../../lib/getMeta";
import { GET_SINGLE_MENU } from "../../lib/wordpress/menu";
import { GET_PAGE_DATA } from "../../lib/wordpress/page";
import { MainMenu } from "../../components/wordpress/mainMenu";
import { getPageSlug } from "../../lib/getPageSlug";
import { getMenu } from "../../lib/getMenu";

export default function Home({ meta, page, menus }) {
	// Filter for primary menu
	const mainMenu = menus.filter((single) => {
		if(single.type == "primary") {return single.menu}
	})[0].menu.menus.edges[0].node;

	// Parse string meta data to HTML
	const metaData = parse(meta);

	return (
		<div>
			<Head>{metaData}</Head>

			<MainMenu mainMenu={mainMenu} />

			<main>
				<h1>{page.title}</h1>
			</main>
		</div>
	);
}

export async function getStaticProps(context) {
	// Get translated page slug based on page DATABASE ID (EN)
	let pageSlug = getPageSlug(3948, context.locale)

	const variables = {
		// For pageDataResponse
		pageName: pageSlug,
	};
	
	// Get all menus from specific language
	let menus = getMenu(context.locale, ["primary"])
	let menusResponse = [];
	for (let single of menus){
		let variables = {
			singleMenuLang: single.id
		}
		let singleMenu = await fetcher(GET_SINGLE_MENU, { variables });
		menusResponse.push({type: single.type, id: single.id, menu: singleMenu});
	}
	menus = menusResponse;

	const metaResponse = await getMeta(pageSlug);
	const meta = metaResponse ? metaResponse : "RankMath response empty";
	const pageDataResponse = await fetcher(GET_PAGE_DATA, { variables });
	const page = pageDataResponse.page;
	return { props: { meta, page, menus } };
}
