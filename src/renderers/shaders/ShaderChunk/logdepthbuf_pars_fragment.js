export default String('\n\
#ifdef USE_LOGDEPTHBUF\n\
\n\
	uniform float logDepthBufFC;\n\
\n\
	#ifdef USE_LOGDEPTHBUF_EXT\n\
\n\
		varying float vFragDepth;\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );