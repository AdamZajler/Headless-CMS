const API_URL = "http://wordpress.local";

export default async function getMeta(pageSlug) {
	let res = await fetch(`${API_URL}/wp-json/rankmath/v1/getHead?url=${API_URL}/${pageSlug}`);

	if (!res.ok) {
		console.error(res.status);
		throw new Error(`Error! ${res.error}`);
	}

	let result = await res.json();
	return result.head;
}
