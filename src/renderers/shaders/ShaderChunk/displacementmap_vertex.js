export default String('\n\
#ifdef USE_DISPLACEMENTMAP\n\
\n\
	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );