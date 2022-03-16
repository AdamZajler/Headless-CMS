import Head from "next/head";
import fetcher from "../../../../headless-wordpress/lib/fetcher";
import { GET_MAIN_MENU } from "../../lib/wordpress/menu";
import { MainMenu } from "../../components/wordpress/mainMenu";
import { useRouter } from "next/router";
import { GET_PAGE_HEAD_DATA } from "../../lib/wordpress/head";

export default function AboutUs({ mainMenu, head, context }) {
	const router = useRouter();

	console.log("/en/o-nas", head.acf_head);
	return (
		<div>
			<Head>
				<title>{head.acf_head.metaTitle ? head.acf_head.metaTitle : head.title}</title>
				<meta
					name="description"
					content={`${head.acf_head.metaDescription ? head.acf_head.metaDescription : ""}`}
				/>
				<meta name="keywords" content={`${head.acf_head.metaKeywords ? head.acf_head.metaKeywords : ""}`} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
	const headResponse = await fetcher(GET_PAGE_HEAD_DATA, { variables });
	const head = headResponse.page.translation;
	return { props: { mainMenu, head, context } };
}
