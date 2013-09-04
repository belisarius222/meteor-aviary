Package.describe({
	summary: "aviary image editor repackaged for Meteor"
});
 Npm.depends({
  "imagemagick":"https://github.com/and-fri/node-imagemagick.git",
  "version": "0.1.3"
});
Package.on_use(function (api) {
	api.add_files([
		'feather.js'
	],'client');
});
