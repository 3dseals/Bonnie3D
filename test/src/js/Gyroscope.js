/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.Gyroscope = function () {

	B3D.Object3D.call( this );

};

B3D.Gyroscope.prototype = Object.create( B3D.Object3D.prototype );
B3D.Gyroscope.prototype.constructor = B3D.Gyroscope;

B3D.Gyroscope.prototype.updateMatrixWorld = ( function () {

	var translationObject = new B3D.Vector3();
	var quaternionObject = new B3D.Quaternion();
	var scaleObject = new B3D.Vector3();

	var translationWorld = new B3D.Vector3();
	var quaternionWorld = new B3D.Quaternion();
	var scaleWorld = new B3D.Vector3();

	return function updateMatrixWorld( force ) {

		this.matrixAutoUpdate && this.updateMatrix();

		// update matrixWorld

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.parent !== null ) {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				this.matrixWorld.decompose( translationWorld, quaternionWorld, scaleWorld );
				this.matrix.decompose( translationObject, quaternionObject, scaleObject );

				this.matrixWorld.compose( translationWorld, quaternionObject, scaleWorld );


			} else {

				this.matrixWorld.copy( this.matrix );

			}


			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// update children

		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

			this.children[ i ].updateMatrixWorld( force );

		}

	};

}() );
