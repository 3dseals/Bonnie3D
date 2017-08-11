/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.MorphAnimMesh = function ( geometry, material ) {

	B3D.Mesh.call( this, geometry, material );

	this.type = 'MorphAnimMesh';

	this.mixer = new B3D.AnimationMixer( this );
	this.activeAction = null;
};

B3D.MorphAnimMesh.prototype = Object.create( B3D.Mesh.prototype );
B3D.MorphAnimMesh.prototype.constructor = B3D.MorphAnimMesh;

B3D.MorphAnimMesh.prototype.setDirectionForward = function () {

	this.mixer.timeScale = 1.0;

};

B3D.MorphAnimMesh.prototype.setDirectionBackward = function () {

	this.mixer.timeScale = -1.0;

};

B3D.MorphAnimMesh.prototype.playAnimation = function ( label, fps ) {

	if( this.activeAction ) {

		this.activeAction.stop();
		this.activeAction = null;
		
	}

	var clip = B3D.AnimationClip.findByName( this, label );

	if ( clip ) {

		var action = this.mixer.clipAction( clip );
		action.timeScale = ( clip.tracks.length * fps ) / clip.duration;
		this.activeAction = action.play();

	} else {

		throw new Error( 'B3D.MorphAnimMesh: animations[' + label + '] undefined in .playAnimation()' );

	}

};

B3D.MorphAnimMesh.prototype.updateAnimation = function ( delta ) {

	this.mixer.update( delta );

};

B3D.MorphAnimMesh.prototype.copy = function ( source ) {

	B3D.Mesh.prototype.copy.call( this, source );

	this.mixer = new B3D.AnimationMixer( this );

	return this;

};
