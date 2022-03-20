import menuMatching from "./json/menuMathing.json"

// Return menu slug based on language & what menus yu want
export function getMenu(locale, menus) {
  let result = [];

  // search for specific language in menuMatching
  for (const [key, singleLangMenus] of Object.entries(menuMatching)) {
    // if locale = menuMatching key (en==en)
		if (key == locale.toLowerCase()) {
      for (const [key, singleMenu] of Object.entries(singleLangMenus)){
        // Find if any of singleMenu (from menuMatching) is marching user request from menus
        let menu = menus.filter((single) => single == key);
        // If it matches asign it (ex. for (EN, primary-menu) it will return main-menu)
        if(key == menu ) {
          result.push({type: key, id: singleMenu})
        }
      }
		}
	}
  return result
}

