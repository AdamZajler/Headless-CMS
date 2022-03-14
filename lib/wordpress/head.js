export const GET_PAGE_HEAD_DATA = `query MyQuery($pageID: ID!) {
  page(id: $pageID, idType: DATABASE_ID) {
    acf_head {
      metaTitle
      metaDescription
      metaKeywords
    }
    title
  }
}`;
