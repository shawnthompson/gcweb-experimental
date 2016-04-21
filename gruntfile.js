module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		assemble: {
			options:
				prettify:
					indent: 2
				marked:
					sanitize: false
				production: false
				data: "site/data/**/*.{yml,json}"
				helpers: "site/helpers/helper{,s}-*.js"
				partials: "site/includes/**/*.hbs"
				layoutdir: "site/layouts"
				layout: "default.hbs"
				assets: "dist/unmin"
			},
			site: {
				src: ['site/*.hbs'],
				dest: './dist'
			}
		},

		'gh-pages': {
			options: {
				base: 'dist'
			},

			src: ['**']
		}

	grunt.registerTask(
		'default', [
			'gh-pages'
	]);
};





