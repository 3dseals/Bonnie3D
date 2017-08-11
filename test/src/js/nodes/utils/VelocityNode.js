/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.VelocityNode = function ( target, params ) {

	B3D.Vector3Node.call( this );

	this.requestUpdate = true;

	this.target = target;
	this.params = params || {};

	this.position = this.target.position.clone();
	this.velocity = new B3D.Vector3();

	switch ( this.params.type ) {

		case "elastic":

			this.moment = new B3D.Vector3();

			this.speed = new B3D.Vector3();
			this.springVelocity = new B3D.Vector3();

			this.lastVelocity = new B3D.Vector3();

			break;

	}

};

B3D.VelocityNode.prototype = Object.create( B3D.Vector3Node.prototype );
B3D.VelocityNode.prototype.constructor = B3D.VelocityNode;

B3D.VelocityNode.prototype.updateFrame = function ( delta ) {

	this.velocity.subVectors( this.target.position, this.position );
	this.position.copy( this.target.position );

	switch ( this.params.type ) {

		case "elastic":

			// convert to real scale: 0 at 1 values
			var deltaFps = delta * (this.params.fps || 60);

			var spring = Math.pow( this.params.spring, deltaFps ),
				damping = Math.pow( this.params.damping, deltaFps );

			// fix relative frame-rate
			this.velocity.multiplyScalar( Math.exp( -this.params.damping * deltaFps ) );

			// elastic
			this.velocity.add( this.springVelocity );
			this.velocity.add( this.speed.multiplyScalar( damping ).multiplyScalar( 1 - spring ) );

			// speed
			this.speed.subVectors( this.velocity, this.lastVelocity );

			// spring velocity
			this.springVelocity.add( this.speed );
			this.springVelocity.multiplyScalar( spring );

			// moment
			this.moment.add( this.springVelocity );

			// damping
			this.moment.multiplyScalar( damping );

			this.lastVelocity.copy( this.velocity );
			this.value.copy( this.moment );

			break;

		default:

			this.value.copy( this.velocity );

	}

};
