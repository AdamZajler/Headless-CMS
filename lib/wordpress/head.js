export const GET_PAGE_HEAD_DATA = `query NewQuery($pageID: ID!, $pageLang: LanguageCodeEnum!) {
  page(id: $pageID, idType: DATABASE_ID) {
    translation(language: $pageLang) {
      acf_head {
        fieldGroupName
        metaDescription
        metaKeywords
        metaTitle
      }
    }
  }
}`;
