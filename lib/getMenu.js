import fetcher from "./fetcher";

export function getMenu(locale) {
	const slugs = await fetcher(`query NewQuery {
  languages {
    slug
  }
}`);
}
