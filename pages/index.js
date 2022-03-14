import Head from "next/head";
import fetcher from "../../../headless-wordpress/lib/fetcher";
import { GET_MAIN_MENU } from "../../../headless-wordpress/lib/wordpress/menu";
import { GET_PAGE_HEAD_DATA } from "../../../headless-wordpress/lib/wordpress/head";
import { MainMenu } from "../components/wordpress/mainMenu";

export default function Home({ mainMenu, head }) {
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

			<main></main>
		</div>
	);
}

export async function getStaticProps() {
	const mainMenuResponse = await fetcher(GET_MAIN_MENU);
	const mainMenu = mainMenuResponse.menu;
	const variables = {
		pageID: "2",
	};
	const headResponse = await fetcher(GET_PAGE_HEAD_DATA, { variables });
	const head = headResponse.page;
	return { props: { mainMenu, head } };
}
