/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Matrix4Node = function( matrix ) {

	B3D.InputNode.call( this, 'm4' );

	this.value = matrix || new B3D.Matrix4();

};

B3D.Matrix4Node.prototype = Object.create( B3D.InputNode.prototype );
B3D.Matrix4Node.prototype.constructor = B3D.Matrix4Node;
