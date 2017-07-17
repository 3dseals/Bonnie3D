export default String('\n\
#if NUM_CLIPPING_PLANES > 0\n\
\n\
	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\
		varying vec3 vViewPosition;\n\
	#endif\n\
\n\
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );