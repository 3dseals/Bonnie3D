/**
 * @author thespite / http://clicktorelease.com/
 */

 function detectCreateImageBitmap() {

	var url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

	return new Promise(function (resolve, reject) {

		if (!('createImageBitmap' in window)) {
			reject();
			return;
		}

		fetch(url).then(function (res) {
			return res.blob();
		}).then(function (blob) {
			Promise.all([
				createImageBitmap(blob, { imageOrientation: "none", premultiplyAlpha: "none" }),
				createImageBitmap(blob, { imageOrientation: "flipY", premultiplyAlpha: "none" }),
				createImageBitmap(blob, { imageOrientation: "none", premultiplyAlpha: "premultiply" }),
				createImageBitmap(blob, { imageOrientation: "flipY", premultiplyAlpha: "premultiply" })
			]).then(function (res) {
				resolve();
			}).catch(function (e) {
				reject();
			});
		});
	});

}

var canUseImageBitmap = detectCreateImageBitmap();
canUseImageBitmap
.then( function( res ) {
	console.log( 'createImageBitmap supported' );
})
.catch( function( res ) {
	console.log( 'createImageBitmap not supported' );
});


B3D.ImageBitmapLoader = function (manager) {

	this.manager = manager !== undefined ? manager : B3D.DefaultLoadingManager;
	this.options = {};

};

B3D.ImageBitmapLoader.prototype = {

	constructor: B3D.ImageBitmapLoader,

	setOptions: function setOptions(options) {

		this.options = options;
		return this;

	},

	load: function load(url, onLoad, onProgress, onError) {

		if (url === undefined) url = '';

		if (this.path !== undefined) url = this.path + url;

		var scope = this;

		var cached = B3D.Cache.get(url);

		if (cached !== undefined) {

			scope.manager.itemStart(url);

			setTimeout(function () {

				if (onLoad) onLoad(cached);

				scope.manager.itemEnd(url);

			}, 0);

			return cached;
		}

		fetch(url).then(function (res) {

			return res.blob();

		}).then(function (res) {

			return createImageBitmap(res, scope.options);

		}).then(function (res) {

			B3D.Cache.add(url, res);

			if (onLoad) onLoad(res);

			scope.manager.itemEnd(url);

		}).catch(function (e) {

			if (onError) onError(e);

			scope.manager.itemEnd(url);
			scope.manager.itemError(url);

		});
	}

};
