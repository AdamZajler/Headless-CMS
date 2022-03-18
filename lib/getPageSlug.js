import pagesMathing from "../pages/pagesMathing.json";

// Pass a English page ID & page context (getStaticProps) for language
export function getPageSlug(pageID, contextLocale){
    let result, resultCopy;
	for (const [key, value] of Object.entries(pagesMathing)) {
		if (key == pageID) {
			// Save an object ex. {en: 'home-page', pl: 'strona-glowna'}
			result = value;
			resultCopy = value;
			// Get key ['en', 'pl']
			result = Object.keys(result);
			// Get key based on contextLocale
			result = result.find((single) => single == contextLocale);
			// Get page name based on key
			for (const [key, value] of Object.entries(resultCopy)) {
				if (key == result) {
					result = value;
				}
			}
		}
	}
    return result;
}