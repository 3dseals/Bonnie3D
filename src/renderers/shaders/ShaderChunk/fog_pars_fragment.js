export default String('\n\
#ifdef USE_FOG\n\
\n\
	uniform vec3 fogColor;\n\
	varying float fogDepth;\n\
\n\
	#ifdef FOG_EXP2\n\
\n\
		uniform float fogDensity;\n\
\n\
	#else\n\
\n\
		uniform float fogNear;\n\
		uniform float fogFar;\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );