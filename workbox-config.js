module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{css,br,gz,ttf,woff,eot,svg,png,webp,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'docs/sw.js'
};