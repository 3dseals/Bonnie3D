export default String('\n\
#ifdef USE_SKINNING\n\
\n\
	vec4 mvPosition = modelViewMatrix * skinned;\n\
\n\
#else\n\
\n\
	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\
\n\
#endif\n\
\n\
gl_Position = projectionMatrix * mvPosition;\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );