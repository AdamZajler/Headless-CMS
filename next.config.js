const withTranslateRoutes = require("next-translate-routes/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withTranslateRoutes({
	i18n: {
		locales: ["en", "pl"],
		defaultLocale: "pl",
	},
	nextConfig,
});
