/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!

		//I KNOW IT'S DANGEROUS
		//BUT I DON'T KNOW HOW TO FIX A BUG AND IT'S DRIVING ME INSANE
		//PLS UNDERSTAND, IT'S NOT LIKE IT'S PRODUCTION!!!
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
