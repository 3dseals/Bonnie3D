window["Bonnie3D"] = window["Bonnie3D"] || {};

Bonnie3D.UVMapping = 300;
Bonnie3D.ClampToEdgeWrapping = 1001;
Bonnie3D.LinearFilter = 1006;
Bonnie3D.LinearMipMapLinearFilter = 1008;
Bonnie3D.UnsignedByteType = 1009;
Bonnie3D.RGBFormat = 1022;
Bonnie3D.RGBAFormat = 1023;
Bonnie3D.LinearEncoding = 3000;

Bonnie3D.arrayMin = function( array ) {

    if ( array.length === 0 ) return Infinity;

    var min = array[ 0 ];

    for ( var i = 1, l = array.length; i < l; ++ i ) {

        if ( array[ i ] < min ) min = array[ i ];

    }

    return min;

}

Bonnie3D.arrayMax = function( array ) {

    if ( array.length === 0 ) return - Infinity;

    var max = array[ 0 ];

    for ( var i = 1, l = array.length; i < l; ++ i ) {

        if ( array[ i ] > max ) max = array[ i ];

    }

    return max;

}