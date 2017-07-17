export default String('\n\
#ifdef USE_COLOR\n\
\n\
	diffuseColor.rgb *= vColor;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );