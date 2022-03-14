export const GET_MAIN_MENU = `query MyQuery{
  menu(id: "119", idType: DATABASE_ID) {
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
