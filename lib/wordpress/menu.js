export const GET_MAIN_MENU = `query MyQuery($menuID: ID!){
  menu(id: $menuID, idType: DATABASE_ID) {
    name
    slug
    menuItems {
      edges {
        node {
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
`;
