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
      phoneImage
      phoneLink
      phoneText
      emailImage
      emailLink
      emailText
      countryList
      countryFlags
      facebookIcon
      facebookIconLink
      instagramIcon
      instagramIconLink
      linkedInIcon
      linkedInIconLink
      twitterIcon
      twitterIconLink
    }
  }
}`;
