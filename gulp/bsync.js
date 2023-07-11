module.exports = function () {
	$.gulp.task('bsync', () => {
		$.browserSync.init({
			server: {
				baseDir: './public'
			},
			notify: false
			// online: false, // Work offline without internet connection
			// tunnel: true, tunnel: 'zaurmag', // Demonstration page: http://projectname.localtunnel.me
		})
	})
}
