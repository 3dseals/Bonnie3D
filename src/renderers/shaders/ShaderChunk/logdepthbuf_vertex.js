export default String('\n\
#ifdef USE_LOGDEPTHBUF\n\
\n\
	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\
\n\
	#ifdef USE_LOGDEPTHBUF_EXT\n\
\n\
		vFragDepth = 1.0 + gl_Position.w;\n\
\n\
	#else\n\
\n\
		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );