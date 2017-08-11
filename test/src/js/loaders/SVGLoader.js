/**
 * @author mrdoob / http://mrdoob.com/
 * @author zz85 / http://joshuakoo.com/
 */

B3D.SVGLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : B3D.DefaultLoadingManager;

};

B3D.SVGLoader.prototype = {

	constructor: B3D.SVGLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var parser = new DOMParser();

		var loader = new B3D.FileLoader( scope.manager );
		loader.load( url, function ( svgString ) {

			var doc = parser.parseFromString( svgString, 'image/svg+xml' );  // application/xml

			onLoad( doc.documentElement );

		}, onProgress, onError );

	}

};
