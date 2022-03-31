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

export const GET_THEME_SETTINGS = `{
  themeSettings {
    __typename
    ... on ThemeSettings_Favicon {
      link
    }
    ... on ThemeSettings_Top_Bar {
      phone
      email
      countryList
      countryFlags
      facebook
      instagram
      linkedIn
      twiiter
    }
  }
}`;
