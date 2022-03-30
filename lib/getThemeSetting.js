export function getThemeSetting(arrayOfSetting, searchedSetting) {
	let singleSetting;

	arrayOfSetting.forEach((element) => {
		if (element.__typename == searchedSetting) {
			singleSetting = element;
			return;
		}
	});

	return singleSetting;
}
