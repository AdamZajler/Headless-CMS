const withTranslateRoutes = require("next-translate-routes/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withTranslateRoutes({
	nextConfig,
	i18n: {
		locales: ["en", "pl"],
		defaultLocale: "pl",
	},
	async redirects() {
    return [
      {
		// Redirect from /en/home-page to /en
        source: '/home-page',
        destination: '/',
        permanent: true,
      },
    ]
  },
});
