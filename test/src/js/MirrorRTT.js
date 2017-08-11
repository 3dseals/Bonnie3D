B3D.MirrorRTT = function ( width, height, options ) {

	B3D.Mirror.call( this, width, height, options );

	this.geometry.setDrawRange( 0, 0 ); // avoid rendering geometry

};

B3D.MirrorRTT.prototype = Object.create( B3D.Mirror.prototype );
