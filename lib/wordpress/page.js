export const GET_PAGE_DATA = `query NewQuery($pageName: ID!) {
  page(id: $pageName, idType: URI) {
    title
  }
}`;
