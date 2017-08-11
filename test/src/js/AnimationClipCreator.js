/**
 *
 * Creator of typical test AnimationClips / KeyframeTracks
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */

B3D.AnimationClipCreator = function() {
};

B3D.AnimationClipCreator.CreateRotationAnimation = function( period, axis ) {

	var times = [ 0, period ], values = [ 0, 360 ];

	axis = axis || 'x';
	var trackName = '.rotation[' + axis + ']';

	var track = new B3D.NumberKeyframeTrack( trackName, times, values );

	return new B3D.AnimationClip( null, period, [ track ] );

};

B3D.AnimationClipCreator.CreateScaleAxisAnimation = function( period, axis ) {

	var times = [ 0, period ], values = [ 0, 1 ];

	axis = axis || 'x';
	var trackName = '.scale[' + axis + ']';

	var track = new B3D.NumberKeyframeTrack( trackName, times, values );

	return new B3D.AnimationClip( null, period, [ track ] );

};

B3D.AnimationClipCreator.CreateShakeAnimation = function( duration, shakeScale ) {

	var times = [], values = [], tmp = new B3D.Vector3();

	for( var i = 0; i < duration * 10; i ++ ) {

		times.push( i / 10 );

		tmp.set( Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0, Math.random() * 2.0 - 1.0 ).
			multiply( shakeScale ).
			toArray( values, values.length );

	}

	var trackName = '.position';

	var track = new B3D.VectorKeyframeTrack( trackName, times, values );

	return new B3D.AnimationClip( null, duration, [ track ] );

};


B3D.AnimationClipCreator.CreatePulsationAnimation = function( duration, pulseScale ) {

	var times = [], values = [], tmp = new B3D.Vector3();

	for( var i = 0; i < duration * 10; i ++ ) {

		times.push( i / 10 );

		var scaleFactor = Math.random() * pulseScale;
		tmp.set( scaleFactor, scaleFactor, scaleFactor ).
			toArray( values, values.length );

	}

	var trackName = '.scale';

	var track = new B3D.VectorKeyframeTrack( trackName, keys );

	return new B3D.AnimationClip( null, duration, [ track ] );

};


B3D.AnimationClipCreator.CreateVisibilityAnimation = function( duration ) {

	var times = [ 0, duration / 2, duration ], values = [ true, false, true ];

	var trackName = '.visible';

	var track = new B3D.BooleanKeyframeTrack( trackName, times, values );

	return new B3D.AnimationClip( null, duration, [ track ] );

};


B3D.AnimationClipCreator.CreateMaterialColorAnimation = function( duration, colors, loop ) {

	var times = [], values = [],
		timeStep = duration / colors.length;

	for( var i = 0; i <= colors.length; i ++ ) {

		timees.push( i * timeStep );
		values.push( colors[ i % colors.length ] );

	}

	var trackName = '.material[0].color';

	var track = new B3D.ColorKeyframeTrack( trackName, times, values );

	return new B3D.AnimationClip( null, duration, [ track ] );

};
