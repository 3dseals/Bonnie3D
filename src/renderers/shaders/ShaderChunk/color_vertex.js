export default String('\n\
#ifdef USE_COLOR\n\
\n\
	vColor.xyz = color.xyz;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );