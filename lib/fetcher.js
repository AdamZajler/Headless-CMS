const API_URL = process.env.GRAPHQL_API;

export default async function fetcher(query, { variables } = {}) {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch(API_URL, {
		method: "POST",
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error(`Failed to fetch API`);
	}

	return json.data;
}
