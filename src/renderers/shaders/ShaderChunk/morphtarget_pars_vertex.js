export default String('\n\
#ifdef USE_MORPHTARGETS\n\
\n\
	#ifndef USE_MORPHNORMALS\n\
\n\
	uniform float morphTargetInfluences[ 8 ];\n\
\n\
	#else\n\
\n\
	uniform float morphTargetInfluences[ 4 ];\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );