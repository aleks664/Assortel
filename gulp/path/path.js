module.exports = {
	path: {
		build: { // Build files
			root: 'public/',
			style: 'public/css',
			img: 'public/images',
			imgFavicons: 'public/images/favicons',
			js: 'public/js',
			fonts: 'public/fonts',
			zip: 'zip'
		},
		src: { // Source files
			pug: 'src/*.pug',
			style: 'src/base/sass/*.+(scss)',
			img: 'src/images/**/*.+(png|jpg|jpeg|gif|svg)',
			imgComp: 'src/components/**/*.+(png|jpg|jpeg|gif|svg)',
			pngIcons: 'src/images/icons/png/*.png',
			svgIcons: 'src/images/icons/svg/*.svg',
			js: 'src/**/*.js',
			fonts: 'src/fonts/*',
			favicon_lg: 'src/images/favicon-lg.png',
			favicon_sm: 'src/images/favicon-sm.png',
			resources: 'src/resources/**/*'
		},
		watch: { // Watch files
			json: 'src/base/data/*.json',
			pug: 'src/**/*.pug',
			style: 'src/**/*.+(sass|scss|css)'
		},
		clean: {
			all: './public'
		}
	}
}
