export default String('\n\
#ifdef USE_ALPHAMAP\n\
\n\
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );
