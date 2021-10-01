module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{css,br,gz,ttf,woff,eot,svg,png,webp,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};