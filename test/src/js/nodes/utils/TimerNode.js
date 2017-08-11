/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.TimerNode = function( value, scale ) {

	B3D.FloatNode.call( this, value );

	this.requestUpdate = true;

	this.scale = scale !== undefined ? scale : 1;

};

B3D.TimerNode.prototype = Object.create( B3D.FloatNode.prototype );
B3D.TimerNode.prototype.constructor = B3D.TimerNode;

B3D.TimerNode.prototype.updateFrame = function( delta ) {

	this.number += delta * this.scale;

};
