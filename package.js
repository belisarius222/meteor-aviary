Package.describe({
	summary: "mixpanel analytics repackaged for Meteor"
});

Package.on_use(function (api) {
	api.add_files([
		'feather.js'
	],'client');
});