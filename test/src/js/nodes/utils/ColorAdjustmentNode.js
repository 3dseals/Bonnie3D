/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ColorAdjustmentNode = function( rgb, adjustment, method ) {

	B3D.TempNode.call( this, 'v3' );

	this.rgb = rgb;
	this.adjustment = adjustment;

	this.method = method || B3D.ColorAdjustmentNode.SATURATION;

};

B3D.ColorAdjustmentNode.SATURATION = 'saturation';
B3D.ColorAdjustmentNode.HUE = 'hue';
B3D.ColorAdjustmentNode.VIBRANCE = 'vibrance';
B3D.ColorAdjustmentNode.BRIGHTNESS = 'brightness';
B3D.ColorAdjustmentNode.CONTRAST = 'contrast';

B3D.ColorAdjustmentNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.ColorAdjustmentNode.prototype.constructor = B3D.ColorAdjustmentNode;

B3D.ColorAdjustmentNode.prototype.generate = function( builder, output ) {

	var rgb = this.rgb.build( builder, 'v3' );
	var adjustment = this.adjustment.build( builder, 'fv1' );

	var name;

	switch ( this.method ) {

		case B3D.ColorAdjustmentNode.SATURATION:

			name = 'saturation_rgb';

			break;

		case B3D.ColorAdjustmentNode.HUE:

			name = 'hue_rgb';

			break;

		case B3D.ColorAdjustmentNode.VIBRANCE:

			name = 'vibrance_rgb';

			break;

		case B3D.ColorAdjustmentNode.BRIGHTNESS:

			return builder.format( '(' + rgb + '+' + adjustment + ')', this.getType( builder ), output );

			break;

		case B3D.ColorAdjustmentNode.CONTRAST:

			return builder.format( '(' + rgb + '*' + adjustment + ')', this.getType( builder ), output );

			break;

	}

	builder.include( name );

	return builder.format( name + '(' + rgb + ',' + adjustment + ')', this.getType( builder ), output );

};
