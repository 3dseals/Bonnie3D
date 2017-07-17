export default String('\n\
#ifdef ALPHATEST\n\
\n\
	if ( diffuseColor.a < ALPHATEST ) discard;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );