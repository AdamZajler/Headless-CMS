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
    ... on ThemeSettings_Meta {
      siteLogo
      favicon48x48
      windowsMetroColor
      safariThemeColor
      appleTouch
      favicon16x16
      favicon32x32
      webmanifest
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
