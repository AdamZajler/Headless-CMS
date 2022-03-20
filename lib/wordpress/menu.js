// query NewQuery($location: MenuLocationEnum = PRIMARY___EN)
export const GET_SINGLE_MENU = `query NewQuery($singleMenuLang: String!) {
  menus(where: {slug: $singleMenuLang}) {
    edges {
      node {
        name
        slug
        menuItems {
          nodes {
            id
            cssClasses
            label
            path
            title
          }
        }
      }
    }
  }
}`;