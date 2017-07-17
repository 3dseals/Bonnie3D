export default String('\n\
#ifdef DOUBLE_SIDED\n\
	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\
#else\n\
	float flipNormal = 1.0;\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );